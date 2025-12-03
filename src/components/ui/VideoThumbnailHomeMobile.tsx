"use client";
import React, { useState, useRef } from 'react';
import YouTube from 'react-youtube';
import Modal from 'react-modal';
import Text from './Text';

// Set modal app element for accessibility
if (typeof window !== 'undefined') {
  Modal.setAppElement('#body');
}

interface VideoThumbnailHomeMobileProps {
  videoId: string;
  title: string;
  subtitle?: string;
  additionalText?: string;
  className?: string;
}

const VideoThumbnailHomeMobile: React.FC<VideoThumbnailHomeMobileProps> = ({ 
  videoId, 
  title, 
  subtitle, 
  additionalText,
  className = "" 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const playerRef = useRef<any>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    // Pause video when closing modal
    if (playerRef.current) {
      try {
        playerRef.current.pauseVideo();
      } catch (e) {
        console.error('Error pausing video:', e);
      }
    }
    setIsModalOpen(false);
  };

  // YouTube player options
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
    },
  };

  // Handle when YouTube player is ready
  const handleReady = (event: any) => {
    playerRef.current = event.target;
    // Explicitly play the video when ready
    try {
      event.target.playVideo();
    } catch (e) {
      console.error('Error playing video:', e);
    }
  };

  // Extract video ID from full URL if needed
  const getVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : url;
  };

  const cleanVideoId = getVideoId(videoId);
  const thumbnailUrl = `https://img.youtube.com/vi/${cleanVideoId}/maxresdefault.jpg`;

  return (
    <>
      <div className={`w-full max-w-[25%] border mob:max-w-[100%] border-gray-800 rounded-[10px] ${className}`}>
        <div 
          className="relative w-full pb-[56.25%] rounded-xl overflow-hidden cursor-pointer group"
          onClick={openModal}
        >
          {/* Thumbnail Image */}
          <img
            src={thumbnailUrl}
            alt={`${title} video thumbnail`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            onError={(e) => {
              // Fallback to medium quality thumbnail if maxresdefault fails
              const target = e.target as HTMLImageElement;
              target.src = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;
            }}
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
            <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg 
                className="w-6 h-6 text-black ml-0.5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          
          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="pl-2 py-4 pr-4">
          <div className="flex gap-[11px] items-center">
            <div>
              <Text className="text-[18px] leading-[25.2px] text-white font-normal">
                {title}
              </Text>
              {subtitle && (
                <Text className="mt-1 text-gray-400 text-[14px] font-normal leading-[21px]">
                  {subtitle}
                </Text>
              )}
            </div>
          </div>
          {additionalText && (
            <Text className="text-gray-400 mt-3 text-[14px] leading-[21px] font-normal">
              {additionalText}
            </Text>
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center z-50 p-2"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
        contentLabel={`${title} video modal`}
      >
        <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 z-10 w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all duration-200"
            aria-label="Close video"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Video Title */}
          <div className="absolute top-2 left-2 z-10">
            <Text className="text-white text-sm font-medium drop-shadow-lg">
              {title}
            </Text>
          </div>
          
          {/* YouTube Player */}
          {isModalOpen && (
            <div className="w-full h-full">
              <YouTube
                key={cleanVideoId}
                videoId={cleanVideoId}
                opts={opts}
                className="w-full h-full"
                onReady={handleReady}
                onEnd={closeModal}
              />
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default VideoThumbnailHomeMobile;
