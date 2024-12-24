import SupportImage from "/assets/support-image.png";

import Image from "next/image";

export default function Support() {
  return (
    <section className="max-w-[1181px] mx-auto pb-24">
      <div className="grid grid-cols-2 justify-center items-start">
        <div className="flex flex-col gap-8">
          <h5 className="-text-dark text-[32px] font-medium">
            Support & Maintenance
          </h5>
          <p className="-text-light-dark text-[18px]">
            We stand by our product with dedicated support:
          </p>

          <ul className="space-y-2">
            <li className="flex items-center -text-dark text-[25px]">
              <span className="mr-3 -text-dark text-lg">●</span>
              Break Fix Support:
            </li>
            <p className="-text-light-dark text-[18px] ml-6">
              Provided after deployment under a signed contract.
            </p>

            <li className="flex items-center -text-dark text-[25px]">
              <span className="mr-3 -text-dark text-lg">●</span>
              Self-Service Portal:
            </li>
            <p className="-text-light-dark text-[18px] ml-6">
              Log tickets and access additional resources at your convenience.
            </p>

            <li className="flex items-center -text-dark text-[25px]">
              <span className="mr-3 -text-dark text-lg">●</span>
              Free Hotfixes:
            </li>
            <p className="-text-light-dark text-[18px] ml-6">
              Delivered via email to ensure uninterrupted service.
            </p>
          </ul>
        </div>

        <div className="flex items-center h-full">
          <Image
            src={SupportImage}
            alt="integration image"
            width={554}
            height={369}
          />
        </div>
      </div>
    </section>
  );
}
