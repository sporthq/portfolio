import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { CircleText } from './Icons';

const MotionLink = motion(Link);

const Logo = () => {
	return (
		<>
			<div className='relative overflow:hidden'>
			

				<motion.div className=' flex items-center justify-center mt-2  p-[0]  '>
					<MotionLink
						href='/'
						className=' w-16 h-16  bg-dark  text-white p-[42px]  flex items-center  justify-center rounded-full -rotate-[5deg] text-4xl font-bold border-2 border-solid border-transparent hover:rotate-0 easy duration-300 hover:bg-light hover:text-dark hover:border-dark'
						whileHover={{ opacity: 0.85}}
					>
						{/* <span className="absolute border-[15px] border-dashed rounded-full border-primaryDark">&nbsp;</span> */}

						<motion.span className=' text-3xl hover:opacity-[0.95] duration-100'>S.N</motion.span>
					</MotionLink>
				</motion.div>
				
			</div>
		</>
	);
};

export default Logo;
