"use client";

import CoverImage from "/assets/video-image.png";
import PlayButton from "/assets/play-button-logo.png";

import Image from "next/image";

import { useState } from "react";

export default function Video() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handlePlay = () => {
    setIsVideoVisible(true);
  };

  return (
    <section className="max-w-[1181px] mx-auto pb-24">
      <div className="relative w-full max-w-[824px] h-[464px] mx-auto">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
            isVideoVisible ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: `url(${CoverImage.src})` }}
        />

        {isVideoVisible && (
          <iframe
            className="absolute inset-0 w-full h-full rounded-[30px] z-10"
            src={`https://www.youtube.com/embed/M-AtR6ocYM8?enablejsapi=1&autoplay=1&mute=1`}
            title="YouTube Video"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}

        {!isVideoVisible && (
          <button
            onClick={handlePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr -from-green -to-yellow rounded-full p-6 z-20"
          >
            <span className="flex items-center justify-center">
              <Image
                src={PlayButton}
                alt="play button"
                width={31.54}
                height={31.54}
              />
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
