import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import projectCasting from "../../public/images/projects/castings-removebg3.png";
import projectForest from "../../public/images/projects/forest-removebg.png";
import projectForkify from "../../public/images/projects/forkify-removebg.png";
import projectMapty from "../../public/images/projects/mapty-removebg.png";
import projectBankist from "../../public/images/projects/bankist-removebg.png";
import projectReactQuiz from "../../public/images/projects/react-quiz-removebg.png";
import salaZakatek from "../../public/images/projects/sala-zak-removebg-preview.png";

import Image from "next/image";
import Link from "next/link";
import {
  GitHubIcon,
  IconHtml5,
  CSSIcon,
  JSIcon,
  GulpIcon,
  ReactIcon,
  MongoDBIcon,
  ExpressIcon,
  TailwindIcon
} from "@/components/Icons";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Projects = () => {
  const { t } = useTranslation("about");

  function WebProject({ image, alt, hrefToPage, gitLink, icons }) {
    return (
      <div className="col-span-2 md:col-start-2 md:col-end-4 w-full r flex justify-center translate-x-3">
        <div className="relative rounded-2xl  flex items-center justify-center group = ">
          <div className="flex items-center justify-center relative flex-col  ">
            <Image priority className="" src={image} alt={alt} />
            <div className="absolute w-[80%] h-[50px] left-[45%] -translate-x-[55%] top-0  bg-transparent -translate-y-[92%] opacity-0 md:opacity-100   group-hover:bg-transparent  group-hover:opacity-90 transition-all duration-600 rounded-2xl mb-[300px] ">
              <div className=" flex items-center justify-around text-dark font-bold ">
                <Link
                  className="text-xl ml-4"
                  href={hrefToPage}
                  target="_blank"
                >
                  <span className="hover:underline duration-300 sm:text-lg xs:text-base">
                    {t("visitproject")}
                  </span>
                </Link>
                <Link className="text-xl " href={gitLink} target="_blank">
                  <span>
                    <GitHubIcon className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="mt-8 -translate-x-10 sm:-translate-x-0">
              <p className="font-semibold mb-2 text-sm">Technology:</p>
              <ul className="flex items-center gap-1 -translate-x-2">
                {icons.map((icon, index) => (
                  <li key={index}>{icon}</li>
                ))}
              </ul>
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
          name="description"
          content="Welcome to Sebastian Nowak's portfolio website. Explore my projects and skills in web development, graphic design, and more."
        />
        <meta
          name="keywords"
          content="Sebastian Nowak, portfolio, web development, graphic design, projects, skills"
        />
        <meta name="author" content="Sebastian Nowak" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="" />
        <AnimatedText
          className="text-8xl 2xl:text-7xl  lg:text-6xl sm:text-5xl   md:mb-16 xs:mb-14 text-center font-semibold mb-24 py-16"
          text={t("maintekstproject")}
          fromBottom
        />

        <div className="mx-4 grid grid-cols-4 md:grid-cols-1 gap-y-24 gap-x-24 md:gap-x-16 sm:gap-x-0  justify-center items-center">
          <WebProject
            image={salaZakatek}
            alt="Casting project page"
            hrefToPage="https://www.salazakatek.com.pl"
            gitLink="https://github.com/sporthq/"
            icons={[
              <IconHtml5
                key="html-icon"
                className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon"
              />,
              <CSSIcon
                key="css-icon"
                className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon"
              />,
              <JSIcon
                key="js-icon"
                className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon"
              />,
              <GulpIcon
                key="gulp-icon"
                className="w-10 h-11 -translate-y-[5px] sm:-translate-y-[4.5px] mx-1 sm:w-8 sm:h-8 
                 duration-300 "
              />,
            ]}
          />
          <WebProject
            image={projectCasting}
            alt="Casting project page"
            hrefToPage="https://castingi.com.pl"
            gitLink="https://github.com/sporthq/castingmern"
            icons={[
              <IconHtml5
                key="html-icon"
                className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon"
              />,
              <CSSIcon
                key="css-icon"
                className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon"
              />,
              <JSIcon
                key="js-icon"
                className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon"
              />,
              <ReactIcon
                key="react-icon"
                className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon"
              />,
              <MongoDBIcon
                key="mongodb-icon"
                className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon"
              />,
              <ExpressIcon
                key="express-icon"
                className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon"
              />,
              <TailwindIcon
                key="tailwind-icon"
                className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon"
              />,
            ]}
          />
          <WebProject
            image={projectReactQuiz}
            alt="Casting project page"
            hrefToPage="https://react-quiz1.vercel.app/"
            gitLink="https://github.com/sporthq/react-quiz1"
            icons={[
              <IconHtml5
                key="html-icon"
                className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon"
              />,
              <CSSIcon
                key="css-icon"
                className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon"
              />,
              <JSIcon
                key="js-icon"
                className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon"
              />,
              <ReactIcon
                key="react-icon"
                className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon"
              />,
            ]}
          />

          <WebProject
            image={projectForest}
            alt="Forest project page"
            hrefToPage="https://sporthq.github.io/forest/"
            gitLink="https://github.com/sporthq/forest"
            icons={[
              <IconHtml5
                key="html-icon"
                className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon"
              />,
              <CSSIcon
                key="css-icon"
                className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon"
              />,
              <JSIcon
                key="js-icon"
                className="w-10 h-8 mx-1 sm:w-8 sm:h-6 duration-300 hover:animate-bounceicon"
              />,
            ]}
          />

          {/* <WebProject
            image={projectMapty}
            alt="Mapty project page"
            hrefToPage="https://mapty-tbq2.onrender.com/"
            gitLink="https://github.com/sporthq/mapty"
          />

          <WebProject
            image={projectForkify}
            alt="Forkify project page"
            hrefToPage="https://forkify-sporthq.netlify.app/"
            gitLink="https://github.com/sporthq/forkify"
          />

          <WebProject
            image={projectBankist}
            alt="Strona projektu Bankist"
            hrefToPage="https://bankist-71x0.onrender.com/"
            gitLink="https://github.com/sporthq/bankist"
          /> */}
        </div>
      </main>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
    },
  };
}

export default Projects;
