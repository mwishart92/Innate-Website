"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import Text from "./Text";

if (typeof window !== "undefined") {
  Modal.setAppElement("#body");
}

interface LoomVideoThumbnailProps {
  videoId?: string; // optional now
  mp4Url?: string; // new fallback
  title?: string;
  subtitle?: string;
  className?: string;
}

const LoomVideoThumbnail: React.FC<LoomVideoThumbnailProps> = ({
  videoId,
  mp4Url,
  title,
  subtitle,
  className = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getVideoId = (url: string) => {
    if (url.includes("loom.com")) {
      const match = url.match(/([a-zA-Z0-9]+)$/);
      return match ? match[1] : url;
    }
    return url;
  };

  const cleanVideoId = videoId ? getVideoId(videoId) : null;
  const loomEmbedUrl = cleanVideoId
    ? `https://www.loom.com/embed/${cleanVideoId}`
    : null;

  return (
    <>
      <div
        className={`flex justify-items-center mob:mt-8 mob:px-0 ${className}`}
      >
        <div className="relative cursor-pointer group" onClick={openModal}>
          <div className="relative w-[921px] h-[515px] mob:w-[354px] mob:h-[204px] rounded-lg overflow-hidden">
            <Image
              src="/images/home/loom_thumb.webp"
              alt={`${title || "Video"} thumbnail`}
              width={631}
              height={360}
              className="w-full h-full object-cover"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
              <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-black ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
      >
        <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center"
          >
            ✕
          </button>

          {/* Title */}
          {title && (
            <div className="absolute top-4 left-4 z-10">
              <Text className="text-white text-lg font-medium">{title}</Text>
            </div>
          )}

          {/* 🎥 Video Logic */}
          {isModalOpen && (
            <>
              {loomEmbedUrl ? (
                <iframe
                  src={loomEmbedUrl}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                />
              ) : mp4Url ? (
                <video
                  src={mp4Url}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-white">
                  No video available
                </div>
              )}
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default LoomVideoThumbnail;
