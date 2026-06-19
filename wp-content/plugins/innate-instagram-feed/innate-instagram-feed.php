<?php
/**
 * Plugin Name: Innate Instagram Feed
 * Description: Displays the 6 most recent Instagram posts in a single-row grid via shortcode [innate_instagram].
 * Version: 1.0.0
 * Author: Rokket Web Development
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// ─── Admin Settings Page ──────────────────────────────────────────────────────

add_action( 'admin_menu', function() {
    add_options_page(
        'Instagram Feed Settings',
        'Instagram Feed',
        'manage_options',
        'innate-instagram-feed',
        'iif_settings_page'
    );
});

add_action( 'admin_init', function() {
    register_setting( 'iif_settings_group', 'iif_access_token', [
        'sanitize_callback' => 'sanitize_text_field',
    ]);
});

function iif_settings_page() {
    $token      = get_option( 'iif_access_token', '' );
    $expiry     = get_option( 'iif_token_expiry', 0 );
    $days_left  = $expiry ? round( ( $expiry - time() ) / DAY_IN_SECONDS ) : null;
    ?>
    <div class="wrap">
        <h1>Instagram Feed Settings</h1>

        <?php if ( $days_left !== null ) : ?>
            <div class="notice notice-<?php echo $days_left < 7 ? 'error' : 'info'; ?> is-dismissible">
                <p>
                    <?php if ( $days_left < 0 ) : ?>
                        Your access token has <strong>expired</strong>. Please refresh or replace it.
                    <?php else : ?>
                        Your access token expires in <strong><?php echo $days_left; ?> days</strong>.
                        <?php if ( $days_left < 14 ) : ?>
                            Consider refreshing it soon.
                        <?php endif; ?>
                    <?php endif; ?>
                </p>
            </div>
        <?php endif; ?>

        <form method="post" action="options.php">
            <?php settings_fields( 'iif_settings_group' ); ?>
            <table class="form-table">
                <tr>
                    <th><label for="iif_access_token">Long-Lived Access Token</label></th>
                    <td>
                        <input
                            type="text"
                            id="iif_access_token"
                            name="iif_access_token"
                            value="<?php echo esc_attr( $token ); ?>"
                            class="regular-text"
                        />
                        <p class="description">Paste your Instagram Graph API long-lived access token here.</p>
                    </td>
                </tr>
            </table>
            <?php submit_button( 'Save Token' ); ?>
        </form>

        <?php if ( $token ) : ?>
            <form method="post">
                <?php wp_nonce_field( 'iif_refresh_token', 'iif_refresh_nonce' ); ?>
                <input type="hidden" name="iif_action" value="refresh_token" />
                <?php submit_button( 'Refresh Token Now', 'secondary' ); ?>
            </form>
        <?php endif; ?>

        <hr>
        <h2>Shortcode</h2>
        <p>Place <code>[innate_instagram]</code> on any page or post to display your feed.</p>
    </div>
    <?php
}

// Handle manual token refresh from settings page
add_action( 'admin_init', function() {
    if (
        isset( $_POST['iif_action'] ) &&
        $_POST['iif_action'] === 'refresh_token' &&
        isset( $_POST['iif_refresh_nonce'] ) &&
        wp_verify_nonce( $_POST['iif_refresh_nonce'], 'iif_refresh_token' ) &&
        current_user_can( 'manage_options' )
    ) {
        iif_refresh_token();
        add_action( 'admin_notices', function() {
            echo '<div class="notice notice-success is-dismissible"><p>Token refresh attempted. Check expiry date above.</p></div>';
        });
    }
});

// ─── Token Refresh ────────────────────────────────────────────────────────────

function iif_refresh_token() {
    $token = get_option( 'iif_access_token', '' );
    if ( ! $token ) return;

    $response = wp_remote_get( add_query_arg([
        'grant_type'   => 'ig_refresh_token',
        'access_token' => $token,
    ], 'https://graph.instagram.com/refresh_access_token' ) );

    if ( is_wp_error( $response ) ) return;

    $body = json_decode( wp_remote_retrieve_body( $response ), true );

    if ( ! empty( $body['access_token'] ) ) {
        update_option( 'iif_access_token', sanitize_text_field( $body['access_token'] ) );
        $expires_in = isset( $body['expires_in'] ) ? intval( $body['expires_in'] ) : ( 60 * DAY_IN_SECONDS );
        update_option( 'iif_token_expiry', time() + $expires_in );
        delete_transient( 'iif_feed_cache' );
    }
}

// Auto-refresh token weekly via WP Cron
add_action( 'iif_weekly_token_refresh', 'iif_refresh_token' );

register_activation_hook( __FILE__, function() {
    if ( ! wp_next_scheduled( 'iif_weekly_token_refresh' ) ) {
        wp_schedule_event( time(), 'weekly', 'iif_weekly_token_refresh' );
    }
});

register_deactivation_hook( __FILE__, function() {
    wp_clear_scheduled_hook( 'iif_weekly_token_refresh' );
});

// Store expiry when token is saved via settings
add_action( 'update_option_iif_access_token', function( $old, $new ) {
    if ( $new && $new !== $old ) {
        // Assume fresh tokens are valid for 60 days
        update_option( 'iif_token_expiry', time() + ( 60 * DAY_IN_SECONDS ) );
        delete_transient( 'iif_feed_cache' );
    }
}, 10, 2 );

// ─── API Fetch ────────────────────────────────────────────────────────────────

function iif_get_posts() {
    $cached = get_transient( 'iif_feed_cache' );
    if ( $cached !== false ) return $cached;

    $token = get_option( 'iif_access_token', '' );
    if ( ! $token ) return [];

    $response = wp_remote_get( add_query_arg([
        'fields'       => 'id,media_type,media_url,permalink,timestamp',
        'limit'        => 6,
        'access_token' => $token,
    ], 'https://graph.instagram.com/me/media' ) );

    if ( is_wp_error( $response ) ) return [];

    $body = json_decode( wp_remote_retrieve_body( $response ), true );
    if ( empty( $body['data'] ) ) return [];

    // Images and carousel albums only (skip Reels/video-only)
    $posts = array_filter( $body['data'], function( $post ) {
        return in_array( $post['media_type'], [ 'IMAGE', 'CAROUSEL_ALBUM' ], true );
    });

    $posts = array_slice( array_values( $posts ), 0, 6 );

    set_transient( 'iif_feed_cache', $posts, HOUR_IN_SECONDS );

    return $posts;
}

// ─── Shortcode ────────────────────────────────────────────────────────────────

add_shortcode( 'innate_instagram', function() {
    $posts = iif_get_posts();

    if ( empty( $posts ) ) {
        if ( current_user_can( 'manage_options' ) ) {
            return '<p><em>Instagram Feed: No posts found. Check your access token in <a href="' . esc_url( admin_url( 'options-general.php?page=innate-instagram-feed' ) ) . '">Settings → Instagram Feed</a>.</em></p>';
        }
        return '';
    }

    ob_start();
    ?>
    <div class="iif-grid">
        <?php foreach ( $posts as $post ) : ?>
            <a
                class="iif-item"
                href="<?php echo esc_url( $post['permalink'] ); ?>"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="<?php echo esc_url( $post['media_url'] ); ?>"
                    alt="Instagram post"
                    loading="lazy"
                />
            </a>
        <?php endforeach; ?>
    </div>
    <?php
    return ob_get_clean();
});

// ─── Styles ───────────────────────────────────────────────────────────────────

add_action( 'wp_head', function() {
    ?>
    <style>
    .iif-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 8px;
        max-width: 100%;
    }
    .iif-item {
        display: block;
        aspect-ratio: 1 / 1;
        overflow: hidden;
    }
    .iif-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: opacity 0.2s ease;
    }
    .iif-item:hover img {
        opacity: 0.85;
    }
    @media ( max-width: 768px ) {
        .iif-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media ( max-width: 480px ) {
        .iif-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    </style>
    <?php
});
