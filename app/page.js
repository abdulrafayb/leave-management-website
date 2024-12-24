import Header from "../app/sections/Header";
import Hero from "../app/sections/Hero";
import WhyChooseUs from "../app/sections/WhyChooseUs";
import Footer from "../app/sections/Footer";
import Benefits from "../app/sections/Benefits";
import Integration from "../app/sections/Integration";
import Features from "../app/sections/Features";
import Support from "../app/sections/Support";
import AppSource from "../app/sections/AppSource";
import ESSSuite from "../app/sections/ESSSuite";
import Video from "../app/sections/Video";
import Blogs from "../app/sections/Blogs";
import BackToTopButton from "./components/BackToTheTop";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WhyChooseUs />
      <Benefits />
      <Integration />
      <Features />
      <Support />
      <AppSource />
      <ESSSuite />
      <Video />
      <Blogs />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

//* Navigation Is Set Up In Sections -> Header */
