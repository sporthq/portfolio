import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const LeftBox = ({ company, date, title, author, colorIcon = "bg-purple-600", childIcon = "U" }) => {
	return (
    <div
        
        
    className='contents'>
      <motion.div 	initial={{ x: -140 }}
      whileInView={{ x: 0 }}
      transition={{ duration: .5, type: 'easy' }}
        className={`bg-light col-start-1 col-end-5 p-4 py-2 rounded-xl  ml-auto shadow-md flex flex-col border-b-4
    border-${colorIcon}-600 w-[400px] `}
      >
        <div className='flex items-center justify-between text-sm mb-2'>
          <span>{company}</span>
          <span>{date}</span>
        </div>

        <h3 className='leading-tight text-justify mb-2 text-lg font-semibold'>
          {title}
        </h3>
        <div className='flex justify-end'>
          <span className='italic text-dark/75'>{author}</span>
        </div>
        
      </motion.div>
	
      <div className='xs:col-start-1 xs:col-end-2 md:col-start-5 md:col-end-6 sm:mx-0 md:mx-auto relative mr-10'>
        <div className='h-full w-6 flex items-center justify-center'></div>
        <div className={`w-12 h-12 absolute left-0 -translate-x-[50%]  md:left-[50%] border-4 border-double  border-light top-1/2 -mt-3 rounded-full ${colorIcon} shadw-2xl flex items-center justify-center text-light font-bold text-2xl `}>
          {childIcon}
        </div>
      </div>
    </div>
  )
};
const RightBox = ({company, date, title, author, colorIcon ="bg-purple-600", childIcon = "U"}) => {
	return (
    <div className='contents '>
					<div className='col-start-5 col-end-6 mr-10 md:mx-auto relative'>
						<div className='h-full w-6 flex items-center justify-center'></div>
						<div className={`w-12 h-12 absolute left-0 -translate-x-[50%] md:left-[50%] border-4 border-double border-light top-1/2 -mt-3 rounded-full  ${colorIcon} shadow-2xl flex items-center justify-center text-light font-bold text-2xl`}>
							{childIcon}
						</div>
					</div>
					<motion.div 		initial={{ x: 140 }}
					whileInView={{ x: 0 }}
					transition={{ duration: .5, type: 'easy' }}
						className={`bg-light col-start-6 col-end-10 p-4 py-2 rounded-xl  mr-auto shadow-md flex flex-col border-b-4
        border-${colorIcon}-600 w-[400px]`}
					>
						<div className='flex items-center justify-between text-sm mb-2'>
							<span>{company}</span>
							<span>{date}</span>
						</div>

						<h3 className='leading-tight text-justify mb-2 text-lg font-semibold'>
							{title}
						</h3>
						<div className='flex justify-end'>
							<span className='italic text-dark/75  '>{author}</span>
						</div>
					</motion.div>
				</div>
  )
};

const Education = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
    offset: ["70px end", "center start"]
    
	});
  
  
	return (
		<>
			<h2 className='text-8xl text-center py-36'>Education</h2>
         
			<div ref={ref}   className='relative grid grid-cols-9 gap-6   '    >
				<motion.div
         style={{scaleY: scrollYProgress}}
        initial={{scaleY:1}}
        animate={{translateX: '-50%'}}
          
					className='absolute md:left-[50%] md:top-0  h-full bg-dark w-[4px]   origin-top '
				></motion.div>
				
       <LeftBox company='Udemy' date="2021-04-12" title="Kurs Tworzenia Stron WWW cz. I - HTML, CSS, RWD" author="Mateusz Maj"   />
				<RightBox company='Udemy' date="2021-04-30" title="Kurs Tworzenia Stron WWW cz. II - SASS, JS, Bootstrap"  author="Mateusz Maj"  />
       <LeftBox company='Udemy' date="2021-05-12" title="Bootstrap Od Podstaw - Stwórz 4 Wyjątkowe strony WWW!" author="Mateusz Maj"  />
				<RightBox company='Udemy' date="2021-05-30" title="JavaScript - Jedyny Kurs, Którego Potrzebujesz!"  author="Mateusz Maj"  />
        <LeftBox company='Udemy' date="2021-05-30" title="10 projektów w czystym JavaScript" author="Mateusz Maj"   />
				<RightBox company='teach:able' date="2021-07-30" title="Kurs Tworzenia Stron WWW cz. 3"  author="Mateusz Maj" colorIcon='bg-green-600' childIcon='t'  />
       <LeftBox company='teach:able' date="2021-09-11" title="Kurs Tworzenia Stron WWW cz. 4" author="Mateusz Maj" colorIcon='bg-green-600'  childIcon='t' />
				<RightBox company='Udemy' date="2022-11-28" title="React - The Complete Guide (incl. React Router & Redux)"  author="Maximilian Schwarzmüller"  />
       <LeftBox company='tech:able' date="2022-01-12" title="15 zaawansowanych komponentów na strony WWW!" author="Mateusz Maj" colorIcon='bg-green-600'  childIcon='t'  />
				<RightBox company='Udemy' date="2022-05-23" title="The Complete JavaScript Course: From Zero to Expert!"  author="Jonas Schmedtmann"  />
       <LeftBox company='Udemy' date="2022-09-09" title="Advanced CSS and Sass: Flexbox, Grid, Animations and More!" author="Jonas Schmedtmann"  />
				<RightBox company='Udemy' date="2022-12-28" title="Build an e-commerce app with React and Chakra UI MERN "  author="Benjamin Fischer"  />
       <LeftBox company='Udemy' date="2023-03-09" title="React, NodeJS, Express & MongoDB - The MERN Fullstack Guide" author="Ewomazino Akpareva"  />
				<RightBox company='Udemy' date="2023-06-06" title="The Ultimate React Course 2023: React, Redux & More"  author="Jonas Schmedtmann"  /> 
       

        
			</div>
     
		</>
	);
};

export default Education;
