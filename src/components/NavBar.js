import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { TwitterIcon, FaceBookIcon, GithubIcon } from './Icons';
import { motion } from 'framer-motion';
const CustomLink = ({ href, title, className = '' }) => {
	const router = useRouter();
	console.log(router)
	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			<span
				className={`h-[1px]  inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] easy duration-300 ${
					router.asPath === href ? 'w-full' : 'w-0'
				}`}
			>
				&nbsp;
			</span>
		</Link>
	);
};
const NavBar = () => {
	const router = useRouter();

	return (
		<header className='w-full px-32 py-6 text-xl font-medium flex items-center justify-between '>
			<div className=''>
				<Logo />
			</div>
			<nav className=' absolute left-[50%] translate-x-[-50%]'>
				<CustomLink href='/' title='Home' className='mr-4 ' />
				<CustomLink href='/about' title='About' className='mx-4' />
				{router.asPath === "/" ? '' : <CustomLink href='/projects' title='Projects' className='mx-4' />}
				
				{/* <CustomLink href='/contact' title='Contact' className='ml-4' /> */}
			</nav>

			<nav className=' flex items-center justify-center flex-wrap'>
				<motion.a href='https://twitter.com/Seba1_01' target={'_blank'} className='w-6 mr-3' whileHover={{ y:-2 }} whileTap={{ scale: 0.9 }}>
					<TwitterIcon></TwitterIcon>
				</motion.a>
				<motion.a href='https://github.com/sporthq' className='w-6 mx-3' target={'_blank'} whileHover={{ y:-2 }} whileTap={{ scale: 0.9 }}>
					<GithubIcon />
				</motion.a>
				<motion.a href='https://www.facebook.com/sebastian.nowak.75' className='w-7 ml-3' target={'_blank'} whileHover={{ y:-2 }} whileTap={{ scale: 0.9 }}>
					<FaceBookIcon />
				</motion.a>
			</nav>
		</header>
	);
};

export default NavBar;
