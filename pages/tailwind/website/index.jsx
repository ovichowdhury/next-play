import ContactUs from "@components/website/ContactUs";
import Download from "@components/website/Download";
import FAQ from "@components/website/FAQ";
import Feature from "@components/website/Feature";
import Hero from "@components/website/Hero";
import LandingLayout from "@components/website/LandingLayout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// https://youtu.be/00gyCtIQp8E

export default function Index() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="font-poppings">
      <LandingLayout>
        {/* Hero section of the website */}
        <Hero></Hero>
        {/* feature section */}
        <Feature></Feature>
        {/* Download section */}
        <Download></Download>
        {/* FAQ section */}
        <FAQ></FAQ>
        {/* Contact us section */}
        <ContactUs></ContactUs>
      </LandingLayout>
    </div>
  );
}
