import { motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
export function useMediaQuery(query) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}

		const listener = () => {
			setMatches(media.matches);
		};

		if (typeof media.addEventListener === 'function') {
			media.addEventListener('change', listener);
		} else {
			media.addListener(listener);
		}

		return () => {
			if (typeof media.removeEventListener === 'function') {
				media.removeEventListener('change', listener);
			} else {
				media.removeListener(listenerList);
			}
		};
	}, [matches, query]);

	return matches;
}

const LeftBox = ({ company, date, title, author, colorIcon = 'bg-purple-600', childIcon = 'U', rowStart, rowEnd }) => {
	const isSmall = useMediaQuery('(min-width: 768px)');
	console.log(isSmall);

	return (
		<div className='contents md:hidden'>
			<motion.div
				initial={isSmall ? { x: -140 } : { x: -140 }}
				whileInView={{ x: 0 }}
				transition={{ duration: 0.5, type: 'easy' }}
				className={`bg-light col-start-1 col-end-5 p-4 py-2 rounded-xl  ml-auto shadow-md flex flex-col border-b-4
    								border-${colorIcon}-600 w-[400px] lg:w-[300px] md:col-start-2 md:col-end-4  `}
			>
				<div className='flex items-center justify-between text-sm mb-2'>
					<span>{company}</span>
					<span>{date}</span>
				</div>

				<h3 className='leading-tight text-justify mb-2 text-lg font-semibold lg:text-base'>{title}</h3>
				<div className='flex justify-end'>
					<span className='italic text-dark/75 lg:text-sm'>{author}</span>
				</div>
			</motion.div>

			<div
				className={`col-start-5 col-end-6 mx-auto relative  md:mx-0 md:col-start-1 md:col-end-2  sm:col-start-4  sm:col-end-4 md:${rowStart} md:${rowEnd} `}
			>
				<div className='h-full w-6 flex items-center justify-center'></div>
				<div
					className={`w-12 h-12 absolute  -translate-x-[50%]  left-[50%] border-4 border-double  border-light top-1/2 -mt-3 rounded-full ${colorIcon} shadow-2xl flex items-center justify-center text-light font-bold text-2xl lg:text-xl md:text-sm  md:w-8 md:h-8  md:mx-0   `}
				>
					{childIcon}
				</div>
			</div>
		</div>
	);
};
const LeftBoxMobile = ({ company, date, title, author, colorIcon = 'bg-purple-600', childIcon = 'U' }) => {
	const isSmall = useMediaQuery('(min-width: 768px)');

	return (
		<div className={` contents ${isSmall ? 'hidden' : ''}`}>
				<div
				className={`col-start-5 col-end-6 mx-auto relative  md:mx-0 md:col-start-1 md:col-end-2   `}
			>
				<div className='h-full w-6 flex items-center justify-center'></div>
				<div
					className={`w-12 h-12 absolute  -translate-x-[50%]  left-[50%] border-4 border-double  border-light top-1/2 -mt-3 rounded-full ${colorIcon} shadow-2xl flex items-center justify-center text-light font-bold text-2xl lg:text-xl md:text-sm  md:w-8 md:h-8  md:mx-0   `}
				>
					{childIcon}
				</div>
			</div>
			<motion.div
				initial={isSmall ? { x: 140 } : { x: 140 }}
				whileInView={{ x: 0 }}
				transition={{ duration: 0.5, type: 'easy' }}
				className={`bg-light col-start-1 col-end-5 p-4 py-2 rounded-xl  ml-auto shadow-md flex flex-col border-b-4
    								border-${colorIcon}-600 w-[400px] lg:w-[300px] md:w-[400px] sm:w-[300px] md:col-start-2 md:col-end-4  `}
			>
				<div className='flex items-center justify-between text-sm mb-2'>
					<span>{company}</span>
					<span>{date}</span>
				</div>

				<h3 className='leading-tight text-justify mb-2 text-lg font-semibold lg:text-base'>{title}</h3>
				<div className='flex justify-end'>
					<span className='italic text-dark/75 lg:text-sm'>{author}</span>
				</div>
			</motion.div>

		
		</div>
	);
};

const RightBox = ({ company, date, title, author, colorIcon = 'bg-purple-600', childIcon = 'U' }) => {
	const isSmall = useMediaQuery('(min-width: 768px)');

	return (
		<div className='contents  '>
			<div className='col-start-5 col-end-6 mx-auto relative md:col-start-1 md:col-end-2 '>
				<div className='h-full w-6 flex items-center justify-center'></div>
				<div
					className={`w-12 h-12 absolute  -translate-x-[50%] left-[50%] border-4 border-double border-light top-1/2 -mt-3 rounded-full  ${colorIcon} shadow-2xl flex items-center justify-center text-light font-bold text-2xl lg:text-xl md:text-sm  md:w-8 md:h-8 `}
				>
					{childIcon}
				</div>
			</div>

			<motion.div
				initial={isSmall ? { x: 140 } : { x: 140 }}
				whileInView={{ x: 0 }}
				transition={{ duration: 0.5, type: 'easy' }}
				className={`bg-light col-start-6 col-end-10 p-4 py-2 rounded-xl  mr-auto shadow-md flex flex-col border-b-4 md:col-start-2 md:col-end-4 
        border-${colorIcon}-600 w-[400px] lg:w-[300px] md:w-[400px] sm:w-[300px]`}
			>
				<div className='flex items-center justify-between text-sm mb-2'>
					<span>{company}</span>
					<span>{date}</span>
				</div>

				<h3 className='leading-tight text-justify mb-2 text-lg font-semibold lg:text-base'>{title}</h3>
				<div className='flex justify-end'>
					<span className='italic text-dark/75 lg:text-sm '>{author}</span>
				</div>
			</motion.div>
		</div>
	);
};

const Education = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['70px end', 'center start'],
	});

	return (
		<>
			<h2 className='text-8xl text-center py-36 lg:text-6xl  sm:text-5xl   lg:py-28'>Education</h2>

			<div ref={ref} className='relative grid grid-cols-9 gap-6 md:gap-4 md:grid-cols-6  mb-16 '>
				<motion.div
					style={{ scaleY: scrollYProgress }}
					initial={{ scaleY: 1 }}
					animate={{ translateX: '-50%' }}
					className='absolute left-[50%] top-0 h-full bg-dark w-[4px]   origin-top   md:w-[2px] md:col-start-1 md:col-end-1'
				></motion.div>

				<LeftBox
					company='Udemy'
					date='2021-04-12'
					title='Kurs Tworzenia Stron WWW cz. I - HTML, CSS, RWD'
					author='Mateusz Maj'
					
					
				/>
				<LeftBoxMobile
					company='Udemy'
					date='2021-04-12'
					title='Kurs Tworzenia Stron WWW cz. I - HTML, CSS, RWD'
					author='Mateusz Maj'
					
					
				/>
				<RightBox
					company='Udemy'
					date='2021-04-30'
					title='Kurs Tworzenia Stron WWW cz. II - SASS, JS, Bootstrap'
					author='Mateusz Maj'
				/>
				<LeftBox
					company='Udemy'
					date='2021-05-12'
					title='Bootstrap Od Podstaw - Stwórz 4 Wyjątkowe strony WWW!'
					author='Mateusz Maj'
					
				/>
				<LeftBoxMobile
					company='Udemy'
					date='2021-05-12'
					title='Bootstrap Od Podstaw - Stwórz 4 Wyjątkowe strony WWW!'
					author='Mateusz Maj'
					
				/>
				<RightBox
					company='Udemy'
					date='2021-05-30'
					title='JavaScript - Jedyny Kurs, Którego Potrzebujesz!'
					author='Mateusz Maj'
				/>
				<LeftBox
					company='Udemy'
					date='2021-05-30'
					title='10 projektów w czystym JavaScript'
					author='Mateusz Maj'
					
				/>
				<LeftBoxMobile
					company='Udemy'
					date='2021-05-30'
					title='10 projektów w czystym JavaScript'
					author='Mateusz Maj'
					
				/>
				<RightBox
					company='teach:able'
					date='2021-07-30'
					title='Kurs Tworzenia Stron WWW cz. 3'
					author='Mateusz Maj'
					colorIcon='bg-green-600'
					childIcon='t'
				/>
				<LeftBox
					company='teach:able'
					date='2021-09-11'
					title='Kurs Tworzenia Stron WWW cz. 4'
					author='Mateusz Maj'
					colorIcon='bg-green-600'
					childIcon='t'
				
				/>
				<LeftBoxMobile
					company='teach:able'
					date='2021-09-11'
					title='Kurs Tworzenia Stron WWW cz. 4'
					author='Mateusz Maj'
					colorIcon='bg-green-600'
					childIcon='t'
					
				/>
				<RightBox
					company='Udemy'
					date='2022-11-28'
					title='React - The Complete Guide (incl. React Router & Redux)'
					author='Maximilian Schwarzmüller'
				/>
				<LeftBox
					company='tech:able'
					date='2022-01-12'
					title='15 zaawansowanych komponentów na strony WWW!'
					author='Mateusz Maj'
					colorIcon='bg-green-600'
					childIcon='t'
				
				/>
				<LeftBoxMobile
					company='tech:able'
					date='2022-01-12'
					title='15 zaawansowanych komponentów na strony WWW!'
					author='Mateusz Maj'
					colorIcon='bg-green-600'
					childIcon='t'
				
				/>
				<RightBox
					company='Udemy'
					date='2022-05-23'
					title='The Complete JavaScript Course: From Zero to Expert!'
					author='Jonas Schmedtmann'
				/>
				<LeftBox
					company='Udemy'
					date='2022-09-09'
					title='Advanced CSS and Sass: Flexbox, Grid, Animations and More!'
					author='Jonas Schmedtmann'
				
				/>
				<LeftBoxMobile
					company='Udemy'
					date='2022-09-09'
					title='Advanced CSS and Sass: Flexbox, Grid, Animations and More!'
					author='Jonas Schmedtmann'
				
				/>
				<RightBox
					company='Udemy'
					date='2022-12-28'
					title='Build an e-commerce app with React and Chakra UI MERN '
					author='Benjamin Fischer'
				/>
				<LeftBox
					company='Udemy'
					date='2023-03-09'
					title='React, NodeJS, Express & MongoDB - The MERN Fullstack Guide'
					author='Ewomazino Akpareva'
					// row='row-start-13'
				/>
				<LeftBoxMobile
					company='Udemy'
					date='2023-03-09'
					title='React, NodeJS, Express & MongoDB - The MERN Fullstack Guide'
					author='Ewomazino Akpareva'
					// row='row-start-13'
				/>
				<RightBox
					company='Udemy'
					date='2023-06-06'
					title='The Ultimate React Course 2023: React, Redux & More'
					author='Jonas Schmedtmann'
				/>
			</div>
		</>
	);
};

export default Education;
