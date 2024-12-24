import FeatureMobile from "/assets/feature-mobile.png";
import IconOne from "/assets/feature-icon-one.png";
import IconTwo from "/assets/feature-icon-two.png";
import IconThree from "/assets/feature-icon-three.png";
import IconFour from "/assets/feature-icon-four.png";
import IconFive from "/assets/feature-icon-five.png";

import Image from "next/image";

export default function Features() {
  return (
    <section className="max-w-[1181px] mx-auto pb-[274px] text-center">
      <h4 className="-text-dark text-[32px] mb-60 font-medium">
        Feature Highlights
      </h4>
      <div className="flex justify-center items-center">
        <div className="absolute w-[458.88px] h-[458.88px] -bg-light rounded-full -z-10"></div>

        <div className="absolute w-[630.56px] h-[630.56px] border-[2px] -border-ring rounded-full -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px] bg-[#04D890] rounded-full flex items-center justify-center shadow-[0px_4px_20px_0px_#04D89040]">
            <Image src={IconOne} alt="icon one" width={32} height={32} />
          </div>
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-[140%] w-[52px] h-[52px] bg-[#7161FF] rounded-full flex items-center justify-center shadow-[0px_4px_20px_0px_#7161FF40]">
            <Image src={IconTwo} alt="icon one" width={32} height={32} />
          </div>
          <div className="absolute bottom-[10%] left-[80%] -translate-x-[50%] translate-y-[50%] w-[52px] h-[52px] bg-[#1FBCE3] rounded-full flex items-center justify-center shadow-[0px_4px_20px_0px_#1FBCE340]">
            <Image src={IconThree} alt="icon one" width={32} height={32} />
          </div>
          <div className="absolute bottom-[10%] left-[20%] -translate-x-[50%] translate-y-[50%] w-[52px] h-[52px] bg-[#FF9E11] rounded-full flex items-center justify-center shadow-[0px_4px_20px_0px_#FF9E1140]">
            <Image src={IconFour} alt="icon one" width={32} height={32} />
          </div>
          <div className="absolute top-1/2 left-0 -translate-x-[50%] -translate-y-[140%] w-[52px] h-[52px] bg-[#FB59C9] rounded-full flex items-center justify-center shadow-[0px_4px_20px_0px_#FB59C940]">
            <Image src={IconFive} alt="icon one" width={32} height={32} />
          </div>
        </div>

        <div className="absolute w-[841.13px] h-[841.13px] border-[2px] -border-ring rounded-full -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[186px] h-[58px] bg-[#F1F0F5] flex items-center justify-center -text-dark text-[19.26px] leading-[28.89px]">
            Day and Night Mode
          </div>
          <div className="absolute top-[30%] left-[50%] -translate-x-[-170%] -translate-y-[50%] w-[186px] h-[58px] bg-[#F1F0F5] flex items-center justify-center -text-dark text-[19.26px] leading-[28.89px]">
            Multi-Language Support
          </div>
          <div className="absolute top-[20%] left-[36%] -translate-x-[-190%] -translate-y-[-1300%] w-[186px] h-[29px] bg-[#F1F0F5] flex items-center justify-center -text-dark text-[19.26px] leading-[28.89px]">
            Flexible Workflows
          </div>
          <div className="absolute top-[31%] left-[50%] -translate-x-[270%] -translate-y-[50%] w-[186px] h-[58px] bg-[#F1F0F5] flex items-center justify-center -text-dark text-[19.26px] leading-[28.89px]">
            Admin Tools
          </div>
          <div className="absolute top-[31%] left-[60%] -translate-x-[270%] -translate-y-[-1000%] w-[186px] h-[29px] bg-[#F1F0F5] flex items-center justify-center -text-dark text-[19.26px] leading-[28.89px]">
            Multi-Site Support
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[256.83px] h-[78.12px] bg-[#F1F0F5] flex items-center justify-center -text-dark text-[19.26px] leading-[28.89px]">
            Comprehensive Leave Management
          </div>
        </div>

        <Image
          src={FeatureMobile}
          alt="feature-mobile"
          width={251.48}
          height={517.94}
        />
      </div>
    </section>
  );
}
