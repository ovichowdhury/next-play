import ContactUs from "@components/website/ContactUs";
import Download from "@components/website/Download";
import FAQ from "@components/website/FAQ";
import Feature from "@components/website/Feature";
import Footer from "@components/website/Footer";
import Hero from "@components/website/Hero";
import Navbar from "@components/website/Navbar";

// https://youtu.be/00gyCtIQp8E

export default function Index() {
  return (
    <div className="font-poppings">
      {/* Navbar of the website */}
      <Navbar></Navbar>
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
      {/* Footer section */}
      <Footer></Footer>
    </div>
  );
}
