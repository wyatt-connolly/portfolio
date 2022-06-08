import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-[#18181B]">
      <Navbar />
      <div className="relative mx-auto w-full sm:max-w-screen-sm">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
