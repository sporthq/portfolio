import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/profile/developer-pic2.png';
import AnimatedText from '@/components/AnimatedText';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {  MailIcon } from '@/components/Icons';
import ParticlesContainer from '@/components/ParticlesContainer';
import { VscArrowRight } from 'react-icons/vsc';
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
export default function Home() {

	const {locale} = useRouter()
	const [profileImgHeight, setProfilImageHeight] = useState('');
	useEffect(() => {
		const updateElementSize = () => {
		  const windowHeight = window.innerHeight;
		  const windowWidth = window.innerWidth;
		  let newHeight;
	  
		  if (windowWidth < 479 && windowHeight < 1000) {
			newHeight = 80;
		  } else if (windowHeight < 690) {
			newHeight = 17;
		  } else if (windowHeight < 730) {
			newHeight = 20;
		  } else if (windowHeight < 780) {
			newHeight = 28;
		  } else if (windowHeight < 880) {
			newHeight = 26;
		  } else if (windowHeight < 900) {
			newHeight = 24;
		  } else {
			// Domyślna wartość, gdy nie spełniono żadnego warunku
			newHeight = 27; // Możesz ustawić tutaj dowolną wartość jako domyślną
		  }
	  
		  setProfilImageHeight(newHeight);
		};
	  
		// Wywołaj funkcję aktualizującą szerokość elementu zaraz po załadowaniu strony i przy każdej zmianie rozmiaru okna
		updateElementSize();
		window.addEventListener('resize', updateElementSize);
	  
		return () => {
		  // Usuń poprzedniego słuchacza przed dodaniem nowego
		  window.removeEventListener('resize', updateElementSize);
		};
	  }, []);
	
	return (
		<>
			<Head>
				<title>Sebastian Nowak || Portfolio</title>
				<meta
					name='description'
					content='Welcome to Sebastian Nowak portfolio page featuring a collection of my web development and graphic design projects. Explore my skills in creating captivating websites, stunning graphics, and more. '
				/>
			</Head>
			<div className='flex   text-dark w-full  min-h-screen items-start lg:items-center  xs:items-start justify-center relative  '>
				<Layout className='pt-8 items-center justify-center w-full' >
					<div className='text-center w-full  flex  flex-col items-center relative  xs:pb-56 sm:pb-42 '>
						<h1 className='text-8xl font-semibold  py-2 relative inline-block lg:text-7xl'>
							{locale + 'Hello!'}
							<motion.span
								initial={{ width: 0 }}
								animate={{ width: '100%' }}
								transition={{ duration: 3 }}
								className='absolute bottom-0 left-0 w-0 h-[4px] bg-gradient-to-l from-primary to-white rounded-full'
							></motion.span>
						</h1>

						<ParticlesContainer />
						<div className='flex flex-col items-center self-center  mb-32'>
							<AnimatedText
								className='text-3xl max-w-4xl mt-12 mb-4  md:text-xl lg:text-2xl md:px-2'
								text='As a full-stack developer with a passion for creating innovative web applications, I use MERN technologies (MongoDB, Express.js, React.js, Node.js) to deliver high-quality and responsive websites.'
							/>
						</div>
					</div>
					<div className='flex items-center justify-center w-full  absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden  '>
						<Link
							className='font-semibold  items-center bg-dark  text-light p-2.5 px-6 rounded-lg text-lg   duration-300   border-2 border-solid border-transparent hover:border-dark group lg:hidden flex'
							href='/projects'
						>
							{' '}
							Projects <VscArrowRight className='group-hover:translate-x-1 ml-1 duration-300' />
						</Link>
						<motion.div
							initial={{ y: 200, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							
							exit={{ y: 200 }}
							transition={{ duration: 1, easy: 'easyInOut' }}
							className=''
														style={{ 
															
															width: `${profileImgHeight}vw` }}
						>
							<Image
								src={profilePic}
							
								alt='Developer while work'
								className={` lg:hidden w-[100%]  flex  xs:flex xs:w-[90vw] `}
								priority
						
							/>
						</motion.div>
						<div className='lg:hidden'>
							<Link
								className=' flex items-center text-xl font-medium   text-dark underline decoration-primary hover:translate-y-1 duration-300 '
								href='mailto:nowak.sebastian99@wp.pl  '
							>
								<MailIcon className=' mr-2 w-8' /> Write to me!{' '}
							</Link>
						</div>
					</div>
				</Layout>
			</div>
		</>
	);
}
