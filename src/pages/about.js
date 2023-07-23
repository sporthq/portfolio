import AnimatedText from '@/components/AnimatedText';
import Head from 'next/head';
import React from 'react';
import Layout from '@/components/Layout';
import profilePic from '../../public/images/profile/sebastian_nowak2.png';
import Image from 'next/image';
import {
	IconHtml5,
	ReactIcon,
	CSSIcon,
	JSIcon,
	NodeIcon,
	MongoDBIcon,
	ExpressIcon,
	NextIcon,
	TailwindIcon,
	BootstrapIcon,
	ReduxIcon,
	RouterIcon,
	FrameMotionIcon,
	IconChakraui,
	GitHubIcon,
} from '@/components/Icons';
import Education from '../components/Education';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const about = () => {
	const { locale } = useRouter();
	const {t} = useTranslation('about')
	return (
		<>
			<Head>
				<title>Sebastian Nowak | About Page</title>
				<meta
					name='description'
					content='Welcome to my portfolio website! I am Sebastian Nowak, and I specialize in web development. My projects focus on creating websites and web applications.'
				/>
			</Head>
			<main className='flex w-full flex-col items-center justify-center '>
				{/* <h1>{translate('projects')}</h1> */}
				{/* <div>
      <p>{t('hello')}</p>
      <p>{t('projects')}</p>
    </div> */}
				<Layout className='py-16 px-14 md:py-12 md:px-4 '>
					<AnimatedText
						className={`text-8xl text-center font-semibold mb-32 2xl:text-7xl  lg:text-6xl sm:text-5xl   sm:mb-20`}
						text={t('welcome')}
						fromBottom
					/>
					<div className='grid w-full  grid-cols-9 gap-16 2xl:grid-cols-6 2xl:gap-x-20 2xl:gap-y-10 md:grid-cols-3 '>
						<div className='col-span-3 flex flex-col items-start justify-start 2xl:col-span-6  md:col-span-3   '>
							<h2 className='mb-4 text-lg font-bold uppercase text-dark/75 2xl:text-xl md:text-lg'>{t('aboutme')}</h2>
							<p className='font-medium 2xl:text:lg md:text-sm'>
								{t('aboutmep1')}
							</p>
							<p className='my-4 font-medium'>
							{t('aboutmep2')}

							</p>
						</div>
						<div className='w-full col-span-3 flex justify-center items-center 2xl:order-2 md:order-1'>
							<div className='bg-light h-auto   flex items-center justify-center  relative  rounded-2xl border-2 border-solid  border-dark  p-2 max-w-[350px]  '>
								<div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark '></div>
								<Image
									src={profilePic}
									alt='Sebastian Nowak'
									className=' w-auto max-h-[500px] self:center  lg:h-auto object-contain  border-2 border-solid border-dark  rounded-2xl md:min-h-[280px] '
									priority
								/>
							</div>
						</div>
						<div className='w-full col-span-3 flex flex-col items-center justify-center  2xl:order-1  md:order-2 md:mt-8'>
							<div>
								<h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Technology</h2>
								<div className='w-full flex mt-4'>
									<IconHtml5 className='w-16 xs:w-12 mr-1 hover:animate-bounceicon  duration-300' />
									<CSSIcon className='w-16 mx-1 xs:w-12  hover:animate-bounceicon duration-300' />
									<JSIcon className='w-16 ml-1 xs:w-12  hover:animate-bounceicon duration-300' />
									<ReactIcon className='w-16 mx-1 xs:w-12   hover:animate-bounceicon duration-300' />
									<NextIcon className='w-16 mx-1  xs:w-12  hover:animate-bounceicon duration-300' />
								</div>
								<div className='w-full flex mt-4'>
									<NodeIcon className='w-16 mr-1  xs:w-12  hover:animate-bounceicon duration-300' />
									<MongoDBIcon className='w-16 xs:w-12  h-[80px] mx-1  hover:animate-bounceicon duration-300' />
									<ExpressIcon className='w-16 xs:w-12  mx-1  hover:animate-bounceicon duration-300' />
									<TailwindIcon className='w-16 xs:w-12  mx-1  hover:animate-bounceicon duration-300' />
									<BootstrapIcon className='w-16 xs:w-12  ml-1  hover:animate-bounceicon duration-300' />
								</div>
								<div className='w-full flex mt-4'>
									<ReduxIcon className='w-16 xs:w-12  mr-1  hover:animate-bounceicon duration-300' />
									<RouterIcon className='w-16  xs:w-12 h-[80px] mx-1  hover:animate-bounceicon duration-300' />
									<FrameMotionIcon className='w-16 xs:w-12  h-[80px] mx-1  hover:animate-bounceicon duration-300' />
									<IconChakraui className='w-16 xs:w-12  h-[80px] mx-1  hover:animate-bounceicon duration-300' />
									<GitHubIcon className='w-16 xs:w-12  h-[80px] mx-1  hover:animate-bounceicon duration-300' />
								</div>
							</div>
						</div>
					</div>
					<Education />
				</Layout>
			</main>
		</>
	);
};

export async function getStaticProps({locale}){
	return {
		props: {
			... (await serverSideTranslations(locale, ['about']))
		},
	}
}
export default about;
