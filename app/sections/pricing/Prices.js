import IconOne from "/assets/pricing/pricing-icon-one.png";
import IconTwo from "/assets/pricing/pricing-icon-two.png";
import CheckCircleWhite from "/assets/pricing/check-circle-icon-white.png";
import CheckCircleBlack from "/assets/pricing/check-circle-icon-black.png";
import Button from "../../components/Button";

import Image from "next/image";
import Link from "next/link";

const cardOneData = [
  {
    icon: CheckCircleWhite,
    benefits: "Create, edit and view leave request",
  },
  {
    icon: CheckCircleWhite,
    benefits: "Header and line level attachments",
  },
  {
    icon: CheckCircleWhite,
    benefits: "Hierarchy based approval workflow",
  },
  {
    icon: CheckCircleWhite,
    benefits: "Multiple way to review the requisition",
  },
  {
    icon: CheckCircleWhite,
    benefits: "Notifications and alerts",
  },
  {
    icon: CheckCircleWhite,
    benefits: "Recall functionality",
  },
  {
    icon: CheckCircleWhite,
    benefits: "Basic employee dashboard and analytics",
  },
  {
    icon: CheckCircleWhite,
    benefits: "Leave quota management",
  },
  {
    icon: CheckCircleWhite,
    benefits: "Approval history",
  },
];

const cardTwoData = [
  {
    icon: CheckCircleBlack,
    benefits: "Tailored compliance solutions",
  },
  {
    icon: CheckCircleBlack,
    benefits: "Customized features",
  },
  {
    icon: CheckCircleBlack,
    benefits: "Personalized integrations",
  },
  {
    icon: CheckCircleBlack,
    benefits: "Customized reporting",
  },
  {
    icon: CheckCircleBlack,
    benefits: "Customizable workflows",
  },
  {
    icon: CheckCircleBlack,
    benefits: "Dedicated account manager",
  },
  {
    icon: CheckCircleBlack,
    benefits: "Premium support",
  },
];

export default function PricingPrices() {
  return (
    <section className="max-w-[1181px] mx-auto pb-24">
      <div className="flex flex-col justify-center items-center gap-4 pt-24 pb-28 text-center">
        <h1 className="-text-dark text-[43.24px] font-medium">
          Easy and Flexible
          <br /> Pricing Plans
        </h1>
        <p className="-text-light-dark text-[18.96px]">
          Unsure which plan best suits your needs?&nbsp;
          <Link
            href="https://www.kaispe.com/resources/contact-us/"
            target="_blank"
          >
            <span className="underline text-[#6943FF]">Contact us</span>&nbsp;
          </Link>
          for expert advice!
        </p>
      </div>

      <div className="grid grid-cols-2 justify-center items-center">
        <div className="w-[436.43px] h-[881px] mx-auto bg-gradient-to-tr from-[#202020] to-[#3A3325] rounded-3xl px-10 pb-10">
          <div className="flex justify-end mb-4">
            <div className="w-[157.05px] h-[39px] -bg-light-golden flex justify-center items-center rounded-b-2xl">
              <span className="text-black text-[14.76px]">Most Popular</span>
            </div>
          </div>

          <div className="flex flex-col text-white gap-2">
            <Image
              src={IconOne}
              alt="icon one"
              width={45}
              height={45}
              className="mb-1"
            />
            <h2 className="text-[29.22px] mb-1 font-medium">Foundation Plan</h2>
            <p className="text-[15.58px] mb-6">For Above 20 Users</p>

            <h3 className="text-[35.54px] mb-6">
              <span className="font-medium">$ 15.00</span>
              <span className="text-[17.77px]">/User/Month</span>
            </h3>

            <Button
              href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.ksplvapp?tab=PlansAndPrice"
              target="_blank"
              text="Buy Now"
              className="w-full -bg-light-golden text-[16px] text-black rounded-xl font-semibold p-3 mb-6"
            />

            <div className="border border-white border-t-[1px] opacity-10 mb-6"></div>

            <div>
              {cardOneData.map((item, index) => (
                <div key={index} className="flex gap-4 items-center mb-6">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={18.07}
                    height={18.07}
                  />
                  <p className="text-[15.36px] leading-[23.04px] pr-4">
                    {item.benefits}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[436.43px] h-[881px] mx-auto bg-white rounded-3xl px-10 pt-14 pb-10">
          <div className="flex flex-col text-black gap-2">
            <Image
              src={IconTwo}
              alt="icon one"
              width={45}
              height={45}
              className="mb-1"
            />

            <h3 className="text-[29.22px] mb-1 font-medium">Custom Plan</h3>
            <p className="text-[#0E0E0E] text-[15.58px] leading[23.37px] mb-4">
              Perfect for businesses needing automated workflows, streamlined
              processes, multisite configurations, and more.
            </p>
            <h2 className="text-[35.54px] leading-[50.31px] mb-6 font-medium">
              Contact Sales For Pricing
            </h2>

            <Button
              href="https://www.kaispe.com/resources/contact-us/"
              target="_blank"
              text="Contact Sales"
              className="w-full -bg-light-golden text-[16px] text-black rounded-xl font-semibold p-3 mb-6"
            />

            <div className="border border-black border-t-[1px] opacity-10 mb-6"></div>

            <div>
              {cardTwoData.map((item, index) => (
                <div key={index} className="flex gap-4 items-center mb-6">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={18.07}
                    height={18.07}
                  />
                  <p className="text-[15.36px] leading-[23.04px]">
                    {item.benefits}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
