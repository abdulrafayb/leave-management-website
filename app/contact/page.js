import Footer from "../sections/Footer";
import Header from "../sections/Header";
import MainHeading from "../sections/contact/MainHeading";
import FormLayout from "../sections/contact/FormLayout";
import Maps from "../sections/contact/Maps";
import BackToTopButton from "../components/BackToTheTop";

export default function Contact() {
  return (
    <div>
      <Header />
      <MainHeading />
      <FormLayout />
      <Maps />
      <Footer />
      <BackToTopButton />
    </div>
  );
}
