"use client";
import React, { useState } from 'react';
import Modal from 'react-modal';
import Text from './Text';

// Set modal app element for accessibility
if (typeof window !== 'undefined') {
  Modal.setAppElement('#body');
}

interface LoomVideoThumbnailProps {
  videoId: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

const LoomVideoThumbnail: React.FC<LoomVideoThumbnailProps> = ({ 
  videoId, 
  title, 
  subtitle, 
  className = "" 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Extract video ID from full URL if needed
  const getVideoId = (url: string) => {
    // Handle both full Loom URLs and just the ID
    if (url.includes('loom.com/embed/')) {
      const match = url.match(/loom\.com\/embed\/([a-zA-Z0-9]+)/);
      return match ? match[1] : url;
    }
    return url;
  };

  const cleanVideoId = getVideoId(videoId);
  const loomEmbedUrl = `https://www.loom.com/embed/${cleanVideoId}`;
  
  // Loom doesn't provide thumbnails via API like YouTube, so we'll use a placeholder
  // You can replace this with an actual thumbnail image if available
  const thumbnailUrl = `/images/loom-thumbnail-placeholder.jpg`; // You can add a custom thumbnail

  return (
    <>
      <div className={`flex justify-items-center mob:mt-8 mob:px-0 ${className}`}>
        <div 
          className="relative cursor-pointer group"
          onClick={openModal}
        >
          {/* Thumbnail Container */}
          <div className="relative w-[631px] h-[360px] mob:w-[354px] mob:h-[204px] bg-gray-800 rounded-lg overflow-hidden">
            {/* Placeholder Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg 
                    className="w-10 h-10 text-white ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <Text className="text-white text-lg font-medium">
                  {title || "Watch Our Story"}
                </Text>
                {subtitle && (
                  <Text className="text-white text-sm opacity-80 mt-2">
                    {subtitle}
                  </Text>
                )}
              </div>
            </div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
              <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg 
                  className="w-8 h-8 text-black ml-1" 
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
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
        contentLabel={`${title || 'Loom video'} modal`}
      >
        <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all duration-200"
            aria-label="Close video"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Video Title */}
          {title && (
            <div className="absolute top-4 left-4 z-10">
              <Text className="text-white text-lg font-medium drop-shadow-lg">
                {title}
              </Text>
            </div>
          )}
          
          {/* Loom Video Player */}
          <div className="w-full h-full">
            <iframe
              src={loomEmbedUrl}
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
              title={title || "Loom video"}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoomVideoThumbnail;
