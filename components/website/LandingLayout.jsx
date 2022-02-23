import Footer from "./Footer";
import Navbar from "./Navbar";

export default function LandingLayout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
}
