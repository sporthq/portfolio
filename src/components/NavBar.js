import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { TwitterIcon, FaceBookIcon, GithubIcon } from './Icons';
import { motion } from 'framer-motion';
const CustomLink = ({ href, title, className = '' }) => {
	const router = useRouter();
	console.log(router);
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

	const [isOpen, setisOpen] = useState('');
	function handleClick() {
		setisOpen(!isOpen);
	}
	return (
		<>
			<header className='relative w-full px-32 py-6 text-xl font-medium flex  items-center justify-between  lg:pt-4 lg:justify-center '>
				<button
        className="absolute left-[10%] top-[50%] -translate-y-[50%] flex-col justify-center items-center hidden lg:flex "
        onClick={handleClick}
      >
        <span
          className={`bg-dark  transition-all duration-300 ease-out block  h-0.5 w-6 rounded-sm   ${
            isOpen ? "rotate-45 translate-y-1 " : "-translate-y-0.5"
          } `}
        ></span>
        <span
          className={`bg-dark  transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out   h-0.5 w-6 rounded-sm   ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button>
				<div className=''>
					<Logo />
				</div>
				<div className='lg:hidden  '>
					<nav className=' absolute left-[50%] translate-x-[-50%]'>
						<CustomLink href='/' title='Home' className='mr-4 ' />
						<CustomLink href='/about' title='About' className='mx-4' />
						{router.asPath === '/' ? '' : <CustomLink href='/projects' title='Projects' className='mx-4' />}

						{/* <CustomLink href='/contact' title='Contact' className='ml-4' /> */}
					</nav>
				</div>

				<nav className=' flex items-center justify-center flex-wrap  lg:absolute lg:items-baseline lg:right-[10%] lg:top-[50%] -translate-y-[50%] xs:flex-col xs:right-[10%]   xs:mt-2'>
					<motion.a
						href='https://twitter.com/Seba1_01'
						target={'_blank'}
						className='w-6 mr-3  my-1  xs:mr-0'
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
					>
						<TwitterIcon className=''></TwitterIcon>
					</motion.a>
					<motion.a
						href='https://github.com/sporthq'
						className='w-6 mx-3 my-1 xs:mx-0'
						target={'_blank'}
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
					>
						<GithubIcon />
					</motion.a>
					<motion.a
						href='https://www.facebook.com/sebastian.nowak.75'
						className='w-7 ml-3 my-1 xs:ml-0'
						target={'_blank'}
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
					>
						<FaceBookIcon />
					</motion.a>
				</nav>
			</header>
		</>
	);
};

export default NavBar;
