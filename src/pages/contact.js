import Head from 'next/head'
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';

function contact(){
    return (
        <>
        <Head>
				<title>Sebastian Nowak | Contact Page</title>
				<meta
					name='description'
                    content='Get in touch with Sebastian Nowak, a skilled web developer. Explore diverse web development projects, including responsive websites, web applications, and more. Contact now for collaborations and consultations.'/>
                    
				
			</Head>
       <main className ='flex w-full flex-col items-center justify-center h-[calc(100vh-243px)] '> 
       <Layout className=''>
       <AnimatedText
					className='text-8xl  lg:text-7xl text-center font-semibold mb-24 py-16'
					text='Contact '
					fromBottom
				/>
         </Layout >

<div className="bg-blue-200 h">
    <div></div>
    </div> 
       </main>
        </>
    )
}

export default contact