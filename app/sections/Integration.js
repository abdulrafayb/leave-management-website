import IntegrationImage from "/assets/integration-image.png";

import Image from "next/image";

export default function Integration() {
  return (
    <section className="max-w-[1181px] mx-auto pb-24 px-20">
      <div className="grid grid-cols-2 justify-center items-start">
        <div className="flex items-center h-full">
          <Image
            src={IntegrationImage}
            alt="integration image"
            width={379}
            height={379}
          />
        </div>

        <div className="flex flex-col gap-8">
          <h5 className="-text-dark text-[32px] font-medium">
            Seamless Integration
          </h5>
          <p className="-text-light-dark text-[18px]">
            Effortlessly connect with systems and tools for a unified workflow.
          </p>

          <ul className="space-y-2">
            <li className="flex items-center -text-dark text-[25px]">
              <span className="mr-3 -text-dark text-lg">●</span>
              Data Management with SharePoint:
            </li>
            <p className="-text-light-dark text-[18px] ml-6">
              Our app leverages Microsoft SharePoint for a secure and seamless
              backend data management experience.
            </p>

            <li className="flex items-center -text-dark text-[25px]">
              <span className="mr-3 -text-dark text-lg">●</span>
              ERP Integration Made Easy:
            </li>
            <p className="-text-light-dark text-[18px] ml-6">
              Easily integrate with Microsoft Dynamics 365 and other popular
              ERPs for unified operations.
            </p>
          </ul>
        </div>
      </div>
    </section>
  );
}
