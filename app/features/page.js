import Header from "../sections/Header";
import Footer from "../sections/Footer";
import FeatureBanner from "../sections/features/Banner";
import FeatureFeatures from "../sections/features/Features";
import BackToTopButton from "../components/BackToTheTop";

export default function Features() {
  return (
    <div>
      <Header />
      <FeatureBanner />
      <FeatureFeatures />
      <Footer />
      <BackToTopButton />
    </div>
  );
}
