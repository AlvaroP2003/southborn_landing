import Loader from "@/sections/Loader";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Features from "@/sections/Features";
import FAQ from "@/sections/Faq";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Features/>
      <FAQ/>
      {/* <Footer/> */}
      <Loader/>
    </>
  );
}
