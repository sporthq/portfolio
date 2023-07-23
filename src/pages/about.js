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

const about = () => {
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
			<Layout className='py-16 px-14 md:py-12 md:px-4 '>
					<AnimatedText
						className={`text-8xl text-center font-semibold mb-32 2xl:text-7xl  lg:text-6xl sm:text-5xl   sm:mb-20`}
						text="Hi there! I'm Sebastian. Welcome to my portfolio page."
						fromBottom
					/>
					<div className='grid w-full  grid-cols-9 gap-16 2xl:grid-cols-6 2xl:gap-x-20 2xl:gap-y-10 md:grid-cols-3 '>
						<div className='col-span-3 flex flex-col items-start justify-start 2xl:col-span-6  md:col-span-3   '>
							<h2 className='mb-4 text-lg font-bold uppercase text-dark/75 2xl:text-xl md:text-lg'>About Me</h2>
							<p className='font-medium 2xl:text:lg md:text-sm'>
								I&apos;ve been programming for nearly 2 years and I&apos;m extremely passionate about this field.My main
								interests revolve around MERN technologies (MongoDB, Express.js, React.js, Node.js), which I actively
								work with in my daily job. Over this time, I&apos;ve gained a solid foundation in these technologies and
								I&apos;m constantly expanding my knowledge
							</p>
							<p className='my-4 font-medium'>
								My main goal is to continuously grow my knowledge and programming skills. I aim to further specialize in
								the MERN stack and explore new technologies that enable me to build innovative solutions. Additionally,
								I&apos;d like to actively engage with the programming community, share knowledge, and collaborate with
								fellow technology enthusiasts.
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

export default about;
