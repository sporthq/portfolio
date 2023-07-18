import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/profile/developer-pic2.png';
import AnimatedText from '@/components/AnimatedText';
import {motion} from 'framer-motion'
import Link from 'next/link';
import { LinkArrow,MailIcon} from '@/components/Icons'
import ParticlesContainer from '@/components/ParticlesContainer';
import {VscArrowRight} from 'react-icons/vsc'
export default function Home() {
	return (
		<>
			<Head>
				<title>Sebastian Nowak || Portfolio</title>
				<meta name="description" 
				    content='Welcome to Sebastian Nowak portfolio page featuring a collection of my web development and graphic design projects. Explore my skills in creating captivating websites, stunning graphics, and more. '/>
			</Head>
			<main className='flex items-center text-dark w-full max-h-screen overflow-hidden  '>
				<Layout className='pt-8 items-center justify-center w-full'>
					<div className='text-center w-full  flex  flex-col items-center mb-32overflow-auto mb-4 relative'>
						<h1 className='text-8xl font-semibold  py-2 relative inline-block'>
							Hello!
							<motion.span initial={{ width: 0 }} animate={{width: '100%'}} transition={{duration: 3}} className='absolute bottom-0 left-0 w-0 h-[4px] bg-gradient-to-l from-primary to-white rounded-full'></motion.span>
						</h1>
					
						<ParticlesContainer />
						<div className='flex flex-col items-center self-center '>
							<AnimatedText
								className='text-3xl max-w-4xl mt-12 mb-4'
								text='As a full-stack developer with a passion for creating innovative web applications, I use MERN technologies (MongoDB, Express.js, React.js, Node.js) to deliver high-quality and responsive websites.'
							/>

						</div>
					</div>
					<div className='flex items-center justify-center w-full   '>
						<Link className='font-semibold flex items-center bg-dark  text-light p-2.5 px-6 rounded-lg text-lg   duration-300   border-2 border-solid border-transparent hover:border-dark group' href='/projects'> Projects <VscArrowRight className="group-hover:translate-x-1 ml-1 duration-300" /></Link>
						<motion.div initial={{y:200, opacity:0}} animate={{y:0, opacity:1}} exit={{y:200}} transition={{duration: 1, easy:'easyInOut'}} className=''>
							<Image src={profilePic} alt='Developer while work' className='w-full h-auto overflow-hidden ' />
						</motion.div>
						<Link className='z-100 flex items-center text-xl font-medium   text-dark underline decoration-primary hover:translate-y-1 duration-300' href='mailto:nowak.sebastian99@wp.pl'><MailIcon  className=' mr-2 w-8' />   Write to me! </Link>
					</div>
		

				</Layout>
				

			</main>
		</>
	);
}
