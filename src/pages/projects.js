import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import projectCasting from '../../public/images/projects/castings-removebg3.png';
import projectForest from '../../public/images/projects/forest-removebg.png';
import projectForkify from '../../public/images/projects/forkify-removebg.png';
import projectMapty from '../../public/images/projects/mapty-removebg.png';
import projectBankist from '../../public/images/projects/bankist-removebg.png';

import Image from 'next/image';
import Link from 'next/link';
import { GitHubIcon } from '@/components/Icons';
const projects = () => {
	function WebProject({ image, alt, hrefToPage, gitLink }) {
		return (
			<div className='relative rounded-2xl  flex items-center jusify-center group '>
				<div className='flex items-center justify-center relative flex-col  '>
					<Image
						priority
						sizes='
							(max-width: 768px) 100vw,
							(max-width: 1200px) 100vw,
							50vw
							'
						className='w-[90%] '
						src={image}
						alt={alt}
					/>
					<div className='absolute w-[80%] h-[50px] left-[45%] -translate-x-[55%] top-0  bg-transparent -translate-y-[80%] opacity-0 group-hover:bg-transparent  group-hover:opacity-90 transition-all duration-600 rounded-2xl '>
						<div className=' flex items-center justify-around text-dark font-bold '>
							<Link className='text-xl ml-4' href={hrefToPage} target='_blank'>
								<span className='hover:underline duration-300'>Visit Project</span>
							</Link>
							<Link className='text-xl ' href={gitLink} target='_blank'>
								<span>
									<GitHubIcon className='w-10 h-8 mx-1  duration-300 hover:animate-bounceicon' />
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<>
			<Head>
				<title>Sebastian Nowak | Projects Page</title>
				<meta
					name='description'
					content="Welcome to Sebastian Nowak's portfolio website. Explore my projects and skills in web development, graphic design, and more."
				/>
				<meta name='keywords' content='Sebastian Nowak, portfolio, web development, graphic design, projects, skills' />
				<meta name='author' content='Sebastian Nowak' />
			</Head>
			<main className='w-full mb-16 flex flex-col items-center justify-center'>
				<Layout className='' />
				<AnimatedText
					className='text-8xl  lg:text-7xl text-center font-semibold mb-24 py-16'
					text='Discover my projects!'
					fromBottom
				/>

				<div className='mx-4 grid grid-cols-4  gap-y-24 '>
					<div className='col-span-2'>
						<WebProject
							image={projectCasting}
							alt='Casting project page'
							hrefToPage='https://casting-appv1.onrender.com/'
							gitLink='https://github.com/sporthq/castingmern'
						/>
					</div>

					<div className='col-span-2 '>
						<WebProject
							image={projectForest}
							alt='Forest project page'
							hrefToPage='https://sporthq.github.io/forest/'
							gitLink='https://github.com/sporthq/forest'
						/>
					</div>
					<div className='col-span-2 '>
						<WebProject
							image={projectMapty}
							alt='Mapty project page'
							hrefToPage='https://mapty-tbq2.onrender.com/'
							gitLink='https://github.com/sporthq/mapty'
						/>
					</div>
					<div className='col-span-2 '>
						<WebProject
							image={projectForkify}
							alt='Forkify project page'
							hrefToPage='https://forkify-sporthq.netlify.app/'
							gitLink='https://github.com/sporthq/forkify'
						/>
					</div>
					<div className='col-span-4 col-start-2  '>
						<WebProject
							image={projectBankist}
							alt='Bankist project page'
							hrefToPage='https://bankist-71x0.onrender.com/'
							gitLink='https://github.com/sporthq/bankist'
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default projects;
