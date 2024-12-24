import MobileOne from "/assets/benefit-mobile-one.png";
import MobileTwo from "/assets/benefit-mobile-two.png";
import MobileThree from "/assets/benefit-mobile-three.png";

export default function Benefits() {
  return (
    <section className="max-w-[1181px] mx-auto pb-64">
      <div className="h-[479px] -bg-dark rounded-3xl">
        <div className="flex gap-12 items-center justify-center p-12">
          <h4 className="text-[34px] leading-[51px] flex-[1.5]">
            Major Benefits
          </h4>
          <p className="text-[17px] leading-[25.5px] flex-[3]">
            Our app simplifies daily tasks with an intuitive design, real-time
            collaboration, customizable tools, and smart notifications, all
            while ensuring robust data security.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 px-8">
          <div
            className="w-[351px] h-[464px] rounded-2xl p-6 flex flex-col gap-4 bg-cover bg-no-repeat bg-center shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)]"
            style={{
              backgroundImage: `url(${MobileOne.src})`,
            }}
          >
            <h5 className="-text-dark text-[24px] font-medium">
              Save Time and Boost Efficiency
            </h5>
            <p className="-text-light-dark text-[14px]">
              Automate repetitive tasks and streamline communication between
              employees and managers.
            </p>
          </div>
          <div
            className="w-[351px] h-[464px] rounded-2xl p-6 flex flex-col justify-end gap-4 bg-cover bg-no-repeat bg-center shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)]"
            style={{
              backgroundImage: `url(${MobileTwo.src})`,
            }}
          >
            <h5 className="-text-dark text-[24px] font-medium">
              Error-Free Processes
            </h5>
            <p className="-text-light-dark text-[14px]">
              Reduce manual errors with a centralized platform for leave data.
            </p>
          </div>
          <div
            className="w-[351px] h-[464px] rounded-2xl p-6 flex flex-col gap-4 bg-cover bg-no-repeat bg-center shadow-[0px_2px_30px_0px_rgba(0,0,0,0.06)]"
            style={{
              backgroundImage: `url(${MobileThree.src})`,
            }}
          >
            <h5 className="-text-dark text-[24px] font-medium">
              Scalable for Growing Businesses
            </h5>
            <p className="-text-light-dark text-[14px]">
              Perfect for single-site or multi-location organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
