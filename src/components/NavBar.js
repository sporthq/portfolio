import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';

import { TwitterIcon, FaceBookIcon, GithubIcon } from './Icons';
import { motion } from 'framer-motion';
import { MailIcon } from '@/components/Icons';
import Flag from 'react-world-flags';

import { useTranslation } from 'next-i18next';

import { useRouter } from 'next/router';

const CustomLink = ({ href, title, className = '' }) => {
	const router = useRouter();

	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			<span
				className={`h-[1px] inline-block  bg-dark xs:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] easy duration-300 ${
					router.asPath === href ? 'w-full' : 'w-0'
				}`}
			>
				&nbsp;
			</span>
		</Link>
	);
};
const CustomMobileLink = ({ href, title, className = '', toggle, icon }) => {
	const router = useRouter();

	function handleClick() {
		toggle();
		router.push(href);
	}

	return (
		<button onClick={handleClick} href={href} className={`${className} relative group my-2`}>
			<p className='flex items-center py-0'>
				<span className='mr-2'>{icon}</span>
				{title}
			</p>
			<span
				className={`h-[1px]  inline-block  bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] easy duration-300 ${
					router.asPath === href ? 'w-full' : 'w-0'
				}`}
			>
				&nbsp;
			</span>
		</button>
	);
};

const NavBar = () => {
	const router = useRouter();
	const { locale } = useRouter();

	const [isOpen, setisOpen] = useState('');
	function handleClick() {
		setisOpen(!isOpen);
	}
	function handleLanguageChange() {
		const newLocale = locale === 'pl' ? 'en' : 'pl';
		router.push(router.pathname, router.asPath, { locale: newLocale });
	}

	const { t } = useTranslation('about');

	return (
		<>
			{/* <div>
      <p>{t('hello')}</p>
      <p>{t('projects')}</p>
    </div> */}
			<header className='relative w-full px-32 py-6 text-xl font-medium flex  items-center justify-between  lg:pt-4 lg:justify-center '>
				<button
					className='absolute left-[10%] top-[50%] -translate-y-[50%] flex-col justify-center items-center hidden lg:flex '
					onClick={handleClick}
				>
					<span
						className={`bg-dark  transition-all duration-300 ease-out block  h-0.5 w-6 rounded-sm   ${
							isOpen ? 'rotate-45 translate-y-1 ' : '-translate-y-0.5'
						} `}
					></span>
					<span
						className={`bg-dark  transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
							isOpen ? 'opacity-0' : 'opacity-100'
						} `}
					></span>
					<span
						className={`bg-dark block transition-all duration-300 ease-out   h-0.5 w-6 rounded-sm   ${
							isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
						} `}
					></span>
				</button>
				{isOpen && (
					<div className='min-w-[70vw]  flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 rounded-lg backdrop-blur-md py-32 text-light  '>
						<Link href='mailto:nowak.sebastian99@wp.pl'>
							<button className='absolute right-[15px] bottom-[15px] flex justify-center items-center text-base'>
								Send <MailIcon className='w-4 mx-2' /> to me!
							</button>
						</Link>
						<nav className='flex flex-col items-center jusitify-center '>
							<CustomMobileLink href='/' title='Home' className=' ' toggle={handleClick} />
							<CustomMobileLink href='/about' title='About' className='' toggle={handleClick} />

							<CustomMobileLink href='/projects' title='Projects' className=' ' toggle={handleClick} />

							<nav className=' flex items-center justify-center mt-6 shadow-xl  		  '>
								<motion.a
									href='https://twitter.com/Seba1_01'
									target={'_blank'}
									className='w-7 mr-3   '
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.9 }}
								>
									<TwitterIcon className=''></TwitterIcon>
								</motion.a>
								<motion.a
									href='https://github.com/sporthq'
									className='w-7 mx-3 '
									target={'_blank'}
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.9 }}
								>
									<GithubIcon />
								</motion.a>
								<motion.a
									href='https://www.facebook.com/sebastian.nowak.75'
									className='w-8 ml-3 '
									target={'_blank'}
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.9 }}
								>
									<FaceBookIcon className='' />
								</motion.a>
							</nav>
						</nav>
					</div>
				)}
				<div className=''>
					<Logo />
				</div>
				<div className='lg:hidden  '>
					<nav className=' absolute left-[50%] translate-x-[-50%]'>
						<CustomLink href='/' title='Home' className='mr-4 ' />
						<CustomLink href='/about' title={t('about')} className='mx-4 ' />
						{router.asPath === '/' ? '' : <CustomLink href='/projects' title={t('projects')} className='mx-4' />}

						{/* <CustomLink href='/contact' title='Contact' className='ml-4' /> */}
						{/* <h1>{t('hello')}</h1> */}
					</nav>
				</div>

				<nav className=' flex items-center justify-center flex-wrap  lg:absolute lg:items-baseline lg:right-[10%] lg:top-[50%] -translate-y-[50%] xs:flex-col xs:right-[10%]   xs:mt-2 xs:items-center '>
					<button onClick={handleLanguageChange}>
						{locale === 'pl' ? (
							<Flag className='w-10 mb-4 xs:w-8 shadow-xl' code='gb' />
						) : (
							<Flag className='w-10 mb-4 xs:w-8 shadow-xl' code='pl' />
						)}
					</button>
				</nav>
			</header>
		</>
	);
};

export default NavBar;
