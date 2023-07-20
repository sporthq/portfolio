import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import Footer from '@/components/Footer';
import FacebookMsg from '@/components/FacebookMsg';
const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={`${montserrat.className} bg-light w-full min-h-screen`}   >
				<NavBar></NavBar>
				<Component {...pageProps} />
				{/* <footer className="border border-t-4 p-3 text-center"><p>Contact with me!</p></footer> */}
				<Footer />
<FacebookMsg />
			</main>
		</>
	);
}
