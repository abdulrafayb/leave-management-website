import Link from "next/link";

export default function PricingPrices() {
  return (
    <section className="max-w-[1181px] mx-auto pb-36 pt-8">
      <p className="-text-dark text-[49.31px] -mb-7">*</p>

      <div className="text-white -bg-dark p-10 rounded-3xl">
        <h4 className="text-[26px] mb-8">
          Pre-requisite for app installation:
        </h4>
        <p className="text-[20px] leading-[30px]">
          Microsoft License Requirement: Ensure that your organization holds
          relevant&nbsp;
          <Link
            href="https://www.microsoft.com/en-us/microsoft-365/enterprise/frontline-plans-and-pricing"
            target="_blank"
          >
            <span className="underline text-[#987EFF]">Microsoft 365</span>
          </Link>
          &nbsp;and/or&nbsp;
          <Link
            href="https://www.microsoft.com/en-us/power-platform/products/power-apps/pricing/"
            target="_blank"
          >
            <span className="underline text-[#987EFF]">
              Microsoft Power Platform license(s)
            </span>
          </Link>
          &nbsp; for optimal application functionality.
        </p>
      </div>
    </section>
  );
}
