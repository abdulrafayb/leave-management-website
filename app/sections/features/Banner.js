import BackgroundImage from "/assets/features/main-image.png";

export default function FeatureBanner() {
  return (
    <section>
      <div className="relative w-full h-[334px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BackgroundImage.src})` }}
        >
          <div className="relative z-10 max-w-[1181px] h-[334px] mx-auto my flex flex-col items-center justify-center gap-10 py-16 px-36 text-center">
            <h1 className="-text-dark text-[32px] leading-[48px] px-24 font-medium">
              Why Choose Our Employee Leave Management App?
            </h1>
            <p className="-text-light-dark text-[18px] leading-[27px] text-center">
              Employee Leave Management App, built on Microsoft PowerApps, is
              designed to deliver a seamless and efficient leave management
              experience. Here&apos;s why it&apos;s the perfect solution for
              your organization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
