import IconOne from "/assets/why-choose-us-icon-one.png";
import IconTwo from "/assets/why-choose-us-icon-two.png";
import IconThree from "/assets/why-choose-us-icon-three.png";
import Heading from "../components/Heading";
import Button from "../components/Button";

import Image from "next/image";

const data = [
  {
    icon: IconOne,
    title: "Improved Design Making with Analytics",
    description:
      "Gain actionable insights into leave trends, workforce availability, and policy effectiveness.",
  },
  {
    icon: IconTwo,
    title: "Enhanced Visibility and Control",
    description:
      "Real-time tracking of leave balances, request statuses, and leave history.",
  },
  {
    icon: IconThree,
    title: "Streamlined Leave Management",
    description:
      "Automate the leave request and approval process, reducing administrative workload.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-[1181px] mx-auto pb-24">
      <div>
        <Heading
          heading="Why Choose Our Employee Leave Management App?"
          paragraph=" Employee Leave Management App, built on Microsoft PowerApps, is
            designed to deliver a seamless and efficient leave management
            experience. Here's why it's the perfect solution for your
            organization."
        />

        <div className="grid grid-cols-3 justify-center items-stretch gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 border-[2px] -border-light py-8 px-6 rounded-2xl"
            >
              <Image src={item.icon} alt="icon" width={54.32} height={54.32} />
              <h3 className="-text-dark text-[18.03px] leading-[23.44px] pr-24 font-medium">
                {item.title}
              </h3>
              <p className="-text-light-dark text-[14.59px] leading-[27px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <Button href="/features" text="View All" className="px-10 mt-12" />
      </div>
    </section>
  );
}
