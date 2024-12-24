import IconOne from "/assets/ess-icon-one.png";
import IconTwo from "/assets/ess-icon-two.png";
import IconThree from "/assets/ess-icon-three.png";
import IconFour from "/assets/ess-icon-four.png";
import ArrowIcon from "/assets/arrow-icon.png";
import Button from "../components/Button";
import Heading from "../components/Heading";

import Image from "next/image";
import Link from "next/link";

const data = [
  {
    icon: { src: IconOne, width: 113, height: 36.68 },
    title: "Expense Management App",
    description:
      "Easily submit and track expense claims for business-related costs.",
    LinkText: "Discover More",
    LinkIcon: ArrowIcon,
  },
  {
    icon: { src: IconTwo, width: 156, height: 44.01 },
    title: "Loan Management App",
    description: `Apply for professional loans with a simple workflow.`,
    LinkText: "Discover More",
    LinkIcon: ArrowIcon,
  },
  {
    icon: { src: IconThree, width: 92.26, height: 44 },
    title: "Purchase Requisition App",
    description: "Request and approve resources or supplies with ease.",
    LinkText: "Discover More",
    LinkIcon: ArrowIcon,
  },
  {
    icon: { src: IconFour, width: 93.02, height: 55.74 },
    title: "Time Attendance App",
    description: "Track work hours, breaks, and attendance in real time.",
    LinkText: "Discover More",
    LinkIcon: ArrowIcon,
  },
];

export default function ESSSuite() {
  return (
    <section className="max-w-[1181px] mx-auto pb-24">
      <Heading
        heading="Effortless Leave Requests with a Comprehensive ESS Suite"
        paragraph="Manage your leave requests effortlessly with our Leave Management App while enjoying the benefits of a complete ESS ecosystem. In addition to leave tracking, empower your team with tools like:"
      />

      <div className="grid grid-cols-2 gap-8 mt-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#EBEAF0] border-[1px] border-[#D7D7D7] py-8 px-6 rounded-2xl flex flex-col"
          >
            <div className="h-[60px] mb-4">
              <Image
                src={item.icon.src}
                alt="icon"
                width={item.icon.width}
                height={item.icon.height}
              />
            </div>
            <div className="flex flex-col gap-4 mb-10">
              <h3 className="-text-dark text-[20px] leading-[26px] pr-24 font-medium">
                {item.title}
              </h3>
              <p className="-text-light-dark text-[16px] leading-[24px]">
                {item.description}
              </p>
            </div>
            <div className="flex flex-col flex-grow justify-end">
              <Link
                href="/"
                className="text-[16.44px] leading-[21.37px] flex gap-2 items-center"
              >
                <div className="bg-gradient-to-r bg-clip-text -from-gray -to-yellow text-transparent">
                  {item.LinkText}
                </div>
                <Image src={item.LinkIcon} alt="arrow icon" width={14.71} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Button href="/" text="View All ESS Apps" className="px-8 mt-12" />
    </section>
  );
}
