import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark/75 font-medium text-lg sm:text-base ">
      <Layout className="py-6 flex items-center justify-around md:flex-col  ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div>
          Created By{" "}
          <Link href="mailto:nowak.sebastian99@wp.pl">
            {" "}
            <span className="mx-1">&#128073;</span>Sebastian Nowak
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
