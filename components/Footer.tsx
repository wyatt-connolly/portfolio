import React from "react";

function Footer() {
  return (
    <div className="bg-[#18181B]">
      <footer className="container mx-auto max-w-2xl px-4 md:px-8 py-14">
        <div>
          <p className="text-base text-[#5D5D69] ">
            Built with{" "}
            <button className="hover:text-[#A1A1B5] hover:underline underline-offset-2">
              Next.js
            </button>
            ,{" "}
            <button className="hover:text-[#A1A1B5] hover:underline underline-offset-2">
              Sanity
            </button>
            ,{" "}
            <button className="hover:text-[#A1A1B5] hover:underline underline-offset-2">
              Tailwind
            </button>{" "}
            and{" "}
            <button className="hover:text-[#A1A1B5] hover:underline underline-offset-2">
              Vercel
            </button>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
