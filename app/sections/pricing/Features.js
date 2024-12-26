import IconOne from "/assets/pricing/feature-icon-one.png";
import IconTwo from "/assets/pricing/feature-icon-two.png";
import IconThree from "/assets/pricing/feature-icon-three.png";
import IconFour from "/assets/pricing/feature-icon-four.png";
import IconFive from "/assets/pricing/feature-icon-five.png";
import IconSix from "/assets/pricing/feature-icon-six.png";
import Heading from "../../components/Heading";

import Image from "next/image";
import Link from "next/link";

const data = [
  {
    icon: IconOne,
    title: "Multi-Language Support",
    description:
      "Reach a global audience with ease! Our add-on offers seamless support for multiple languages, including French, Arabic, and Spanish. Expand your customer base and deliver a localized experience across regions.",
  },
  {
    icon: IconTwo,
    title: "My Approvals - A Separate App",
    description: (
      <>
        Simplify your approval workflows with&nbsp;
        <Link
          href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.kspapprovals_free?tab=Overview"
          target="_blank"
        >
          <span className="underline text-[#6943FF]">My Approvals</span>
        </Link>
        , an independent app that integrates smoothly with your existing
        systems. Enjoy enhanced visibility, tracking, and control over all your
        approvals.
      </>
    ),
  },
  {
    icon: IconThree,
    title: " Seamless Integration with Microsoft Dynamics 365",
    description:
      "Supercharge your business processes with Microsoft Dynamics 365 integration. Keep your teams aligned, improve efficiency, and unlock deeper insights by connecting with Dynamics 365 for a unified experience.",
  },
  {
    icon: IconFour,
    title: "Compatible with Other ERPs",
    description:
      "Easily integrate with a variety of other ERPs to ensure smooth data exchange and enhanced operational efficiency. Our add-on makes cross-platform integration simple and effortless.",
  },
  {
    icon: IconFive,
    title: "Customizable Workflow",
    description:
      "The flexible workflow engine in the app can be customized to meet the particular needs of different businesses.",
  },
  {
    icon: IconSix,
    title: "Time Attendance - A Separate App",
    description: (
      <>
        Track work hours, breaks, and attendance in real time with{" "}
        <Link
          href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.ksptimeapp_free?tab=Overview"
          target="_blank"
        >
          <span className="underline text-[#6943FF]">Time Attendance App</span>.
        </Link>
      </>
    ),
  },
];

export default function PricingFeatures() {
  return (
    <section className="max-w-[1181px] mx-auto pb-24">
      <Heading
        heading="Unlock More Power with Our Add-Ons!"
        paragraph="Enhance your experience with our premium add-ons designed to provide tailored solutions for your business needs."
      />

      <div className="grid grid-cols-2 justify-center items-stretch gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 border-[2px] -border-light py-8 px-6 rounded-2xl"
          >
            <Image src={item.icon} alt="icon" width={51.86} height={54.32} />
            <h3 className="-text-dark text-[18.03px] leading-[23.44px] font-medium">
              {item.title}
            </h3>
            <p className="-text-light-dark text-[14.59px] leading-[27px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
