import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Logo1 from "../../public/images/logo/logo_1.png";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <>
      <div className="relative overflow:hidden">
        <motion.div className=" flex items-center justify-center mt-2  p-[0]  ">
          <Image style={{ width: "90px" }} src={Logo1} alt="logo " />
          {/* <MotionLink
						href='/'
						className=' w-16 h-16  bg-dark  text-white p-[42px]  flex items-center  justify-center rounded-full -rotate-[5deg] text-4xl font-bold border-2 border-solid border-transparent hover:rotate-0 easy duration-300 hover:bg-light hover:text-dark hover:border-dark lg:p-[32px] md:p-[24px] '
						whileHover={{ opacity: 0.85}}
					>

						<motion.span className=' text-3xl hover:opacity-[0.95] duration-100 lg:text-xl'>S.N</motion.span>
					</MotionLink> */}
        </motion.div>
      </div>
    </>
  );
};

export default Logo;
