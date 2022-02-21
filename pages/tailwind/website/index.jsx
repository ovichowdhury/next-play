import Feature from "@components/website/Feature";
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
    </div>
  );
}
