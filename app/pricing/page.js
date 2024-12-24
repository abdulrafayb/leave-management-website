import Header from "../sections/Header";
import Footer from "../sections/Footer";
import PricingFeatures from "../sections/pricing/Features";
import PricingPrices from "../sections/pricing/Prices";
import PricingBanner from "../sections/pricing/Banner";
import BackToTopButton from "../components/BackToTheTop";

export default function Pricing() {
  return (
    <div>
      <Header />
      <PricingPrices />
      <PricingFeatures />
      <PricingBanner />
      <Footer />
      <BackToTopButton />
    </div>
  );
}
