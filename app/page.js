"use client";

import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
} from "react-icons/ai";
import Image from "next/image";
import eloiAvatar from "../public/eloi-2-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import al from "../public/al.png";
import fs from "../public/fs.png";
import abm from "../public/abm.png";
import lru from "../public/lru.png";
import { useState, useEffect } from "react";

export default function Home() {
  const titleText = "Eloi Dieme"; // Your title
  const [animatedTitle, setAnimatedTitle] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Initialize the title with each letter in an object including its animation state
    const letters = titleText.split('').map(letter => ({
      letter,
      isAnimating: false,
    }));

    setAnimatedTitle(letters);

    const animateLetter = (index) => {
      if (index < 0 || index >= letters.length) {
        // Animation complete; ensure the last letter is also teal
        return;
      }

      // Animate the current letter to orange and then back to teal
      setAnimatedTitle(current => current.map((item, idx) => ({
        ...item,
        isAnimating: idx === index,
      })));

      // Wait for a moment before turning the letter back to teal
      setTimeout(() => {
        setAnimatedTitle(current => current.map((item, idx) => ({
          ...item,
          // Turn the letter back to teal after it's been orange
          isAnimating: false,
        })));

        // Proceed to animate the next letter after a short delay
        setTimeout(() => {
          animateLetter(index + 1);
        }, 100); // Adjust this delay as needed
      }, 200); // This is the time the letter stays orange before going back to teal
    };

    // Start animating the first letter
    animateLetter(0);

  }, [titleText]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Eloi Dieme Portfolio</title>
        <meta name="description" content="Eloi Dieme's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Eloi Dieme</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
          <h2 className="text-5xl py-2 font-medium md:text-6xl">
        {animatedTitle.map((item, index) => (
          <span
            key={index}
            className={`transition-colors duration-200 ${item.isAnimating ? 'text-orange-500' : 'text-teal-600'}`}
          >
            {item.letter}
          </span>
        ))}
      </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Student at CentraleSupélec.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-lg mx-auto">
              Engineering student interested in software engineering and data
              science. <br />
              I'm always up for a challenge !
            </p>
          </div>
          <div className="text-5xl flex justify-center dark:text-gray-400 gap-16 py-3 text-gray-600">
            <a href="https://www.github.com/eloidieme">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/eloi-dieme">
              <AiFillLinkedin />
            </a>
            <a href="https://www.medium.com">
              <AiFillMediumCircle />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
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
            <h3 className="text-3xl py-1 dark:text-white">
              Some of my blog posts
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              In the realm of engineering, where{" "}
              <span className="text-teal-500 font-bold">innovation</span> and{" "}
              <span className="text-teal-500 font-bold">precision</span>{" "}
              intertwine, the power of writing emerges as a foundational pillar.
              I firmly believe that the ability to articulate{" "}
              <span className="text-teal-500 font-bold">complex ideas</span> and
              document{" "}
              <span className="text-teal-500 font-bold">
                intricate processes
              </span>{" "}
              is indispensable for every engineer. Through writing, we not only{" "}
              <span className="text-teal-500 font-bold">clarify</span> our own
              understanding but also{" "}
              <span className="text-teal-500 font-bold">share</span> our
              insights and breakthroughs with the world.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              My passion lies in delving into the heart of{" "}
              <span className="text-teal-500 font-bold">
                challenging subjects
              </span>
              , unraveling their mysteries, and presenting them in a way that
              enlightens and engages. Each blog post is a testament to this
              journey, a blend of{" "}
              <span className="text-teal-500 font-bold">rigorous analysis</span>{" "}
              and{" "}
              <span className="text-teal-500 font-bold">
                creative expression
              </span>
              .
            </p>
            <div className="mt-4">
              <a
                href="https://dev.to/yourusername"
                className="inline-flex items-center text-teal-500 hover:text-teal-600"
              >
                See more blog posts by me
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
            <div className="flex text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white w-1/3 flex-col justify-between">
              <div className="flex justify-center">
                <Image
                  alt="design-icon"
                  src={design}
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Understand financial durations dynamics using ACD models.
              </h3>
              <p className="py-2">
                An article reviewing the mathematics of ACD models and an
                empirical analysis of financial durations using R.
              </p>
              <h4 className="py-4 text-teal-600">Skills involved</h4>
              <p className="text-gray-800 py-1">Time Series Analysis</p>
              <p className="text-gray-800 py-1">ACD models</p>
              <p className="text-gray-800 py-1">R language</p>
              <div class="group cursor-pointer mt-7">
                <a
                  href="#"
                  class="block text-center text-white px-4 py-2 rounded-md relative overflow-hidden"
                >
                  <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span class="relative z-10">Read on Medium</span>
                </a>
              </div>
            </div>
            <div className="flex text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white w-1/3 flex-col justify-between">
              <div className="flex justify-center">
                <Image alt="code-icon" src={code} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                What is a LRU cache and why is it useful ?
              </h3>
              <p className="py-2">
                A short blog post describing the LRU cache data structure and
                walking through its implementation in C.
              </p>
              <h4 className="py-4 text-teal-600">Skills involved</h4>
              <p className="text-gray-800 py-1">Data Structures</p>
              <p className="text-gray-800 py-1">Computer Science</p>
              <p className="text-gray-800 py-1">C Programming</p>
              <div class="group cursor-pointer mt-7">
                <a
                  href="#"
                  class="block text-center text-white px-4 py-2 rounded-md relative overflow-hidden"
                >
                  <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span class="relative z-10">Read on Medium</span>
                </a>
              </div>
            </div>
            <div className="flex text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white w-1/3 flex-col justify-between">
              <div className="flex justify-center">
                <Image
                  alt="consulting-icon"
                  src={consulting}
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Visualizing high-dimensional data using t-SNE.
              </h3>
              <p className="py-2">
                A introduction to dimensionality reduction in machine learning
                and to the t-SNE technique, used for visualization purposes.
              </p>
              <h4 className="py-4 text-teal-600">Skills involved</h4>
              <p className="text-gray-800 py-1">Dimensionality Reduction</p>
              <p className="text-gray-800 py-1">Data Science</p>
              <p className="text-gray-800 py-1">Python language</p>
              <div class="group cursor-pointer mt-7">
                <a
                  href="#"
                  class="block text-center text-white px-4 py-2 rounded-md relative overflow-hidden"
                >
                  <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span class="relative z-10">Read on Medium</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">
              Some of my projects
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Delving into the realm of technology, I've embarked on a journey
              to explore and create. From simulating complex systems to
              enhancing data structures for performance, each project represents
              a unique challenge and a step forward in my quest for innovation.
              Here's a glimpse into some of the exciting projects I've worked
              on.
            </p>
            <div className="mt-4">
              <a
                href="https://dev.to/yourusername"
                className="inline-flex items-center text-teal-500 hover:text-teal-600"
              >
                See more projects by me
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
              href="your-link-here-for-img1"
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
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-lg">
                <p className="text-white text-3xl font-bold shadow-md">
                  Acoustic Location in Python
                </p>
              </div>
            </a>
            <a
              href="your-link-here-for-img1"
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
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-lg">
                <p className="text-white text-3xl font-bold shadow-md">
                  Agent-Based Modeling in Python
                </p>
              </div>
            </a>
            <a
              href="your-link-here-for-img1"
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
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-lg">
                <p className="text-white text-3xl font-bold shadow-md">
                  Fluid Simulation in Python
                </p>
              </div>
            </a>
            <a
              href="your-link-here-for-img1"
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
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-lg">
                <p className="text-white text-3xl font-bold shadow-md">
                  LRU Cache in C
                </p>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
