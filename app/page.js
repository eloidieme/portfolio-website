"use client";

import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
} from "react-icons/ai";
import Image from "next/image";
import eloiAvatar from "../public/eloi-2-wave.png";
import acd from "../public/acd.png";
import lruc from "../public/lruc.png";
import tsne from "../public/tsne.png";
import al from "../public/al.png";
import fs from "../public/fs.png";
import abm from "../public/abm.png";
import lru from "../public/lru.png";
import React, { useState, useEffect } from "react";

const translations = {
  en: {
    title: "Eloi Dieme Portfolio",
    description: "Eloi Dieme's portfolio website",
    intro: "Student at CentraleSupélec.",
    about_1:
      "Engineering student interested in software engineering and data science.",
    about_2: "I'm always up for a challenge!",
    blogTitle: "Some of my blog posts",
    blogIntro: (
      <>
        In the realm of engineering, where{" "}
        <span className="text-teal-500 font-bold">innovation</span> and{" "}
        <span className="text-teal-500 font-bold">precision</span> intertwine,
        the power of writing emerges as a foundational pillar. I firmly believe
        that the ability to articulate{" "}
        <span className="text-teal-500 font-bold">complex ideas</span> and
        document{" "}
        <span className="text-teal-500 font-bold">intricate processes</span> is
        indispensable for every engineer. Through writing, we not only{" "}
        <span className="text-teal-500 font-bold">clarify</span> our own
        understanding but also{" "}
        <span className="text-teal-500 font-bold">share</span> our insights and
        breakthroughs with the world.
      </>
    ),
    passionParagraph: (
      <>
        My passion lies in delving into the heart of{" "}
        <span className="text-teal-500 font-bold">challenging subjects</span>,
        unraveling their mysteries, and presenting them in a way that enlightens
        and engages. Each blog post is a testament to this journey, a blend of{" "}
        <span className="text-teal-500 font-bold">rigorous analysis</span> and{" "}
        <span className="text-teal-500 font-bold">creative expression</span>.
      </>
    ),
    seeMoreBlog: "See more blog posts by me",
    readOnMedium: "Read on Medium",
    skills: "Skills involved",
    article1Title: "Understand financial durations dynamics using ACD models.",
    article1Description:
      "An article reviewing the mathematics of ACD models and an empirical analysis of financial durations using R.",
    article1Skills: ["Time Series Analysis", "ACD models", "R language"],
    article2Title: "What is a LRU cache and why is it useful?",
    article2Description:
      "A short blog post describing the LRU cache data structure and walking through its implementation in C.",
    article2Skills: ["Data Structures", "Computer Science", "C Programming"],
    article3Title: "Visualizing high-dimensional data using t-SNE.",
    article3Description:
      "A introduction to dimensionality reduction in machine learning and to the t-SNE technique, used for visualization purposes.",
    article3Skills: [
      "Dimensionality Reduction",
      "Data Science",
      "Python language",
    ],
    projectTitle: "Some of my projects",
    projectIntro:
      "Delving into the realm of technology, I've embarked on a journey to explore and create. From simulating complex systems to enhancing data structures for performance, each project represents a unique challenge and a step forward in my quest for innovation. Here's a glimpse into some of the exciting projects I've worked on.",
    seeMoreProject: "See more projects by me",
    proj1: "Acoustic Location in Python",
    proj2: "Agent-Based Modeling in Python",
    proj3: "Fluid Simulation in Python",
    proj4: "LRU Cache in C",
    resume: "Resume",
  },
  fr: {
    title: "Portfolio d'Eloi Dieme",
    description: "Site portfolio d'Eloi Dieme",
    intro: "Étudiant à CentraleSupélec.",
    about_1:
      "Élève-ingénieur intéressé par le génie logiciel et la science des données.",
    about_2: "Je suis toujours prêt à relever un défi !",
    blogTitle: "Quelques-uns de mes articles",
    blogIntro: (
      <>
        Dans le domaine de l&#39;ingénierie, où{" "}
        <span className="text-teal-500 font-bold">l&#39;innovation</span> et{" "}
        <span className="text-teal-500 font-bold">la précision</span>{" "}
        s&#39;entremêlent, le pouvoir de l&#39;écriture émerge comme un pilier
        fondamental. Je crois fermement que la capacité à articuler{" "}
        <span className="text-teal-500 font-bold">des idées complexes</span> et
        à documenter{" "}
        <span className="text-teal-500 font-bold">des processus intriqués</span>{" "}
        est indispensable pour chaque ingénieur. Par l&#39;écriture, nous ne
        faisons pas seulement{" "}
        <span className="text-teal-500 font-bold">clarifier</span> notre propre
        compréhension mais aussi{" "}
        <span className="text-teal-500 font-bold">partager</span> nos
        découvertes et avancées avec le monde.
      </>
    ),
    seeMoreBlog: "Voir plus d'articles",
    readOnMedium: "Lire sur Medium",
    skills: "Compétences impliquées",
    article1Title:
      "Comprendre la dynamique des durées financières avec les modèles ACD.",
    article1Description:
      "Un article examinant les mathématiques des modèles ACD et une analyse empirique des durées financières utilisant R.",
    article1Skills: [
      "Analyse de séries temporelles",
      "Modèles ACD",
      "Langage R",
    ],
    article2Title: "Qu'est-ce qu'un cache LRU et pourquoi est-il utile ?",
    article2Description:
      "Un court article de blog décrivant la structure de données de cache LRU et parcourant son implémentation en C.",
    article2Skills: [
      "Structures de données",
      "Informatique",
      "Programmation en C",
    ],
    article3Title: "Visualiser des données de haute dimension avec t-SNE.",
    article3Description:
      "Une introduction à la réduction de dimensionnalité en apprentissage automatique et à la technique t-SNE, utilisée à des fins de visualisation.",
    article3Skills: [
      "Réduction de dimensionnalité",
      "Science des données",
      "Langage Python",
    ],
    passionParagraph: (
      <>
        Ma passion réside dans l&#39;exploration approfondie{" "}
        <span className="text-teal-500 font-bold">de sujets difficiles</span>,
        en dévoilant leurs mystères et en les présentant d&#39;une manière qui
        éclaire et engage. Chaque article de blog est un témoignage de ce
        voyage, un mélange{" "}
        <span className="text-teal-500 font-bold">d&#39;analyse rigoureuse</span> et{" "}
        <span className="text-teal-500 font-bold">d&#39;expression créative</span>.
      </>
    ),
    projectTitle: "Quelques-uns de mes projets",
    projectIntro:
      "En me plongeant dans le domaine de la technologie, je me suis lancé dans un voyage d'exploration et de création. Qu'il s'agisse de simuler des systèmes complexes ou d'améliorer la performance des structures de données, chaque projet représente un défi unique et un pas en avant dans ma quête d'innovation. Voici un aperçu de quelques-uns des projets passionnants sur lesquels j'ai travaillé.",
    seeMoreProject: "Voir plus de projets",
    proj1: "Localisation acoustique en Python",
    proj2: "Modèles à agents en Python",
    proj3: "Simulation de fluides en Python",
    proj4: "Cache LRU en C",
    resume: "CV",
  },
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "fr" : "en"));
  };

  useEffect(() => {
    const consoleText = (words, id, colors) => {
      let visible = true;
      const con = document.getElementById("console");
      let letterCount = 0;
      let x = 1;
      const target = document.getElementById(id);
      let wordIndex = 0; // Track the current word

      // Start displaying the letters
      const interval = setInterval(() => {
        if (letterCount === words[wordIndex].length + 1) {
          clearInterval(interval); // Stop the interval when the word is fully displayed
        } else {
          target.innerHTML = words[wordIndex].substring(0, letterCount);
          letterCount += x;
        }
      }, 120);

      // Keep the underscore blinking indefinitely
      setInterval(() => {
        con.className = visible
          ? "console-underscore hidden text-3xl sm:text-5xl md:text-6xl"
          : "console-underscore text-black dark:text-white text-3xl sm:text-5xl md:text-6xl";
        visible = !visible;
      }, 400);
    };

    consoleText(["Eloi Dieme."], "text", ["teal"]);
  }, []);

  const t = translations[language];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-teal-50 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Eloi Dieme</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-1xl md:text-2xl mx-4"
                />
              </li>
              <li>
                <BiWorld
                  onClick={toggleLanguage}
                  className="cursor-pointer text-2xl md:text-3xl mx-4"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 inline-block w-24 text-center"
                  href="https://drive.google.com/drive/folders/1G30apN74pNufVFqYdgkcfc5_uJ4YDfcW?usp=share_link"
                >
                  {t.resume}
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <div>
              <div className="console-container">
                <span
                  id="text"
                  className="text-3xl sm:text-5xl md:text-6xl py-2 text-teal-600 font-medium dark:text-teal-400"
                ></span>
                <div
                  className="console-underscore text-black dark:text-white"
                  id="console"
                >
                  &#95;
                </div>
              </div>
            </div>

            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              {t.intro}
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-lg mx-auto">
              {t.about_1} <br />
              {t.about_2}
            </p>
          </div>
          <div className="text-5xl flex justify-center dark:text-gray-400 gap-16 py-3 text-gray-600">
            <a href="https://www.github.com/eloidieme">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/eloi-dieme">
              <AiFillLinkedin />
            </a>
            <a href="https://medium.com/@eloidieme">
              <AiFillMediumCircle />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 mb-20 overflow-hidden md:h-96 md:w-96">
            <Image
              alt="eloi-avatar"
              src={eloiAvatar}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">{t.blogTitle}</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              {t.blogIntro}
            </p>
            <p
              className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"
            >
              {t.passionParagraph}
            </p>
            <div className="mt-4">
              <a
                href="https://medium.com/@eloidieme"
                className="inline-flex items-center text-teal-500 hover:text-teal-600"
              >
                {t.seeMoreBlog}
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:flex gap-10">
            <div className="flex text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-50 w-full lg:w-1/3 flex-col justify-between">
              <div className="flex justify-center">
                <Image alt="acd-icon" src={acd} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                {t.article1Title}
              </h3>
              <p className="py-2">{t.article1Description}</p>
              <h4 className="py-4 text-teal-600 font-bold">{t.skills}</h4>
              {t.article1Skills.map((skill, index) => (
                <p key={index} className="text-gray-800 py-1 font-semibold">
                  {skill}
                </p>
              ))}
              <div className="group cursor-pointer mt-7">
                <a
                  href="https://medium.com/@eloidieme/understand-financial-durations-dynamics-using-acd-models-part-1-the-theory-41589f560317"
                  className="block text-center text-white px-4 py-2 rounded-md relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">{t.readOnMedium}</span>
                </a>
              </div>
            </div>
            <div className="flex text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-50 w-full lg:w-1/3 flex-col justify-between">
              <div className="flex justify-center">
                <Image alt="lruc-icon" src={lruc} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                {t.article2Title}
              </h3>
              <p className="py-2">{t.article2Description}</p>
              <h4 className="py-4 text-teal-600 font-bold">{t.skills}</h4>
              {t.article2Skills.map((skill, index) => (
                <p key={index} className="text-gray-800 py-1 font-semibold">
                  {skill}
                </p>
              ))}
              <div className="group cursor-pointer mt-7">
                <a
                  href="https://medium.com/@eloidieme"
                  className="block text-center text-white px-4 py-2 rounded-md relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">{t.readOnMedium}</span>
                </a>
              </div>
            </div>
            <div className="flex text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-50 w-full lg:w-1/3 flex-col justify-between">
              <div className="flex justify-center">
                <Image alt="tsne-icon" src={tsne} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                {t.article3Title}
              </h3>
              <p className="py-2">{t.article3Description}</p>
              <h4 className="py-4 text-teal-600 font-bold">{t.skills}</h4>
              {t.article3Skills.map((skill, index) => (
                <p key={index} className="text-gray-800 py-1 font-semibold">
                  {skill}
                </p>
              ))}
              <div className="group cursor-pointer mt-7">
                <a
                  href="https://medium.com/@eloidieme"
                  className="block text-center text-white px-4 py-2 rounded-md relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">{t.readOnMedium}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">{t.projectTitle}</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              {t.projectIntro}
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/eloidieme"
                className="inline-flex items-center text-teal-500 hover:text-teal-600"
              >
                {t.seeMoreProject}
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <a
              href="https://github.com/eloidieme/Localisation-Acoustique"
              className="basis-1/3 flex-1 relative group block"
            >
              <Image
                alt="img1"
                src={al}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 md:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-lg">
                <p className="text-white text-base md:text-2xl lg:text-3xl font-normal md:font-bold px-4 text-center md:opacity-0 group-hover:opacity-100">
                  {t.proj1}
                </p>
              </div>
            </a>
            <a
              href="https://github.com/eloidieme/Agent-Based-Modeling"
              className="basis-1/3 flex-1 relative group block"
            >
              <Image
                alt="img1"
                src={abm}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 md:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-lg">
                <p className="text-white text-base md:text-2xl lg:text-3xl font-normal md:font-bold px-4 text-center md:opacity-0 group-hover:opacity-100">
                  {t.proj2}
                </p>
              </div>
            </a>
            <a
              href="https://github.com/eloidieme/ML-Cancer-App"
              className="basis-1/3 flex-1 relative group block"
            >
              <Image
                alt="img1"
                src={fs}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 md:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-lg">
                <p className="text-white text-base md:text-2xl lg:text-3xl font-normal md:font-bold px-4 text-center md:opacity-0 group-hover:opacity-100">
                  {t.proj3}
                </p>
              </div>
            </a>
            <a
              href="https://github.com/eloidieme/LRU-Cache"
              className="basis-1/3 flex-1 relative group block"
            >
              <Image
                alt="img1"
                src={lru}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 md:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-lg">
                <p className="text-white text-base md:text-2xl lg:text-3xl font-normal md:font-bold px-4 text-center md:opacity-0 group-hover:opacity-100">
                  {t.proj4}
                </p>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
