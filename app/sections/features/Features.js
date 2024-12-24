import IconOne from "/assets/features/icon-one.png";
import IconTwo from "/assets/features/icon-two.png";
import IconThree from "/assets/features/icon-three.png";
import IconFour from "/assets/features/icon-four.png";
import IconFive from "/assets/features/icon-five.png";
import IconSix from "/assets/features/icon-six.png";
import IconSeven from "/assets/features/icon-seven.png";
import IconEight from "/assets/features/icon-eight.png";
import IconNine from "/assets/features/icon-nine.png";
import IconTen from "/assets/features/icon-ten.png";
import IconEleven from "/assets/features/icon-eleven.png";
import IconTwelve from "/assets/features/icon-twelve.png";
import IconThirteen from "/assets/features/icon-thirteen.png";

import Image from "next/image";

const data = [
  {
    icon: IconOne,
    title: "Streamlined Leave Management",
    description:
      "Automate the leave request and approval process, reducing administrative workload.",
  },
  {
    icon: IconTwo,
    title: "Built for Scalability",
    description:
      "Ideal for organizations of any size, from single-site operations to multi-location enterprises.",
  },
  {
    icon: IconThree,
    title: "Enhanced Visibility and Control",
    description:
      "Real-time tracking of leave balances, request statuses, and leave history.",
  },
  {
    icon: IconFour,
    title: "Customization and Flexibility",
    description:
      "Built on Microsoft PowerApps, ensuring a robust and adaptable framework.",
  },
  {
    icon: IconFive,
    title: "Improved Decision-Making with Analytic",
    description:
      "Gain actionable insights into leave trends, workforce availability, and policy effectiveness.",
  },
  {
    icon: IconSix,
    title: "Multilingual Support",
    description:
      "Enable global accessibility with support for English, French, Arabic, Spanish, and more.",
  },
  {
    icon: IconSeven,
    title: "Modern User Experience",
    description:
      "Day and Night Mode for comfortable viewing in any environment.",
  },
  {
    icon: IconEight,
    title: "Reliable Backend and Support",
    description:
      "Powered by Microsoft SharePoint for secure and seamless data management.",
  },
  {
    icon: IconNine,
    title: "Leave Request Submission",
    description:
      "Employees can easily submit their leave requests through our intuitive app, which can be accessed from anywhere, anytime.",
  },
  {
    icon: IconTen,
    title: "Leave Policy Rules",
    description:
      "Our solution allows customers to configure leave policy rules for specific leave types.",
  },
  {
    icon: IconEleven,
    title: "Flexible Workflow",
    description:
      "Our solution offers a flexible workflow engine that allows line managers and HR departments to approve or reject leave requests easily.",
  },
  {
    icon: IconTwelve,
    title: "Leave Review",
    description:
      "Our app allows line managers and HR departments to review leave requests conveniently.",
  },
  {
    icon: IconThirteen,
    title: "Leave Data Insights",
    description:
      "Our solution provides leave data insights for a specific employee and specific leave types.",
  },
];

export default function FeatureFeatures() {
  return (
    <section>
      <div className="max-w-[1181px] mx-auto mt-16 mb-32 grid grid-cols-3 justify-between items-stretch gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border-[2px] -border-light py-12 px-6 rounded-2xl"
          >
            <Image
              src={item.icon}
              alt="icon"
              width={54.32}
              height={54.32}
              className="mb-6"
            />
            <div className="flex flex-col justify-start h-[60px] mb-4">
              <h3 className="-text-dark text-[18.03px] leading-[23.44px] pr-24 font-medium">
                {item.title}
              </h3>
            </div>
            <div className="flex flex-col flex-grow justify-start">
              <p className="-text-light-dark text-[14.59px] leading-[27px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      ;
    </section>
  );
}
