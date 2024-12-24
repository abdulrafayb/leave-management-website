import PlayButton from "/assets/play-button-logo.png";
import HeroImage from "/assets/hero-image.png";
import Button from "../components/Button";

import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="custom-container">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="p-4 flex flex-col gap-8 justify-center">
            <h1 className="-text-dark text-[44px] leading-[66px] font-medium">
              Automate Workforce Leave Management with Ease
            </h1>
            <p className="-text-light-dark font-normal text-[18px] leading-[30px]">
              Empower employees and administrators with a unified platform for
              handling leave requests, approvals, and monitoring—all while
              gaining actionable insights with real-time analytics.
            </p>
            <div className="flex gap-8 items-center">
              <Button
                href="https://outlook.office365.com/book/KAISPE6@NETORGFT2992819.onmicrosoft.com/"
                target="_blank"
                text="Book A Demo"
                className="px-6"
              />
              <div className="flex justify-center items-center gap-3">
                <div className="h-[50px] w-[50px] bg-gradient-to-tr -from-green -to-yellow rounded-full relative overflow-hidden flex items-center justify-center">
                  <span className="flex items-center justify-center">
                    <Image
                      src={PlayButton}
                      alt="play button"
                      width={20}
                      height={20}
                    />
                  </span>
                </div>
                <span className="-text-dark text-[18.84px]">
                  Watch Intro Video
                </span>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="relative flex justify-center items-end">
              <div className="h-[329.2px] w-[566px] bg-gradient-to-tr -from-green -to-yellow rounded-3xl absolute bottom-0 -z-10"></div>
              <Image
                src={HeroImage}
                alt="hero image"
                width={521.42}
                height={500.6}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
