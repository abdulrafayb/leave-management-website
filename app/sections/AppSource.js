import MobileImage from "/assets/appsource-image.png";
import MicrosoftLogo from "/assets/appsource-microsoft-logo.png";

import Link from "next/link";
import Image from "next/image";

export default function AppSource() {
  return (
    <section className="max-w-[1181px] mx-auto pt-28 pb-48">
      <div className="h-[352px] -bg-dark rounded-3xl relative">
        <div className="absolute -top-[35%] -left-[5%]">
          <Image
            src={MobileImage}
            alt="mobile image"
            width={734}
            height={576}
          />
        </div>

        <div className="pl-[600px] pr-24 flex flex-col py-10 justify-center h-full">
          <h4 className="text-[30.94px] leading-[46.39px] mb-4">
            Available on Microsoft AppSource.
          </h4>
          <p className="text-[14.91px] leading-[22.37px] mb-10">
            You can also find it on Microsoft AppSource, making it easy to
            access and Get it now directly from a trusted platform.
          </p>

          <Link
            href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.ksplvapp?tab=Overview"
            target="_blank"
            className="block w-fit cursor-pointer"
          >
            <div className="flex w-[158.6px] h-[67.72px] bg-black gap-3 p-6 rounded-lg cursor-pointer">
              <div className="flex justify-center items-center gap-3 w-full h-full">
                <Image
                  src={MicrosoftLogo}
                  alt="microsoft logo"
                  width={36.04}
                  height={35.7}
                />
                <div className="flex flex-col">
                  <p className="text-[9.31px] font-normal mb-[2px]">
                    Get it from
                  </p>
                  <p className="text-[13.34px] font-semibold -mt-1">
                    Microsoft
                  </p>
                  <p className="text-[13.34px] font-semibold -mt-1">
                    AppSource
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
