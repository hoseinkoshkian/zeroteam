"use client";

import React, { useEffect } from "react";
// import { useRef } from "react";
import { useState } from "react";
// import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import screenImg from "./screen.png";
import screen1 from "./screen-1.png";
import screen2 from "./screen-2.png";
import screen3 from "./screen-3.png";
import "./style.css";
import { Icon } from "@iconify/react/dist/iconify.js";
// import { useAnimate } from "motion/react";
interface ProjectsDataInterface {
  src: string;
  title: string;
}
type ProjectDataType = ProjectsDataInterface[];
const ProjectsData: ProjectDataType = [
  {
    src: screenImg.src,
    title: "لوکسیک",
  },
  {
    src: screen1.src,
    title: "بالحال",
  },
  {
    src: screen2.src,
    title: "جواد",
  },
  {
    src: screen3.src,
    title: "اصغر",
  },
];
export default function ProjectSlider() {
  const [index, setIndex] = useState(0);
  const [before, setBefore] = useState(ProjectsData.length - 1);
  const [after, setAfter] = useState(index + 1);
  // const [data, setData] = useState<ProjectDataType>([]);
  // const [hydrated, setHydrated] = useState(false);
  // useEffect(() => {
  //   setData(ProjectsData);
  //   setHydrated(true);
  // }, []);

  console.log(index, before, after);
  const handleRightClick = () => {
    // const total = ProjectsData.length;
    const last = ProjectsData.length - 1;
    let next: number = index + 1 > last ? 0 : index + 1;
    switch (next) {
      case 0:
        setIndex(next);
        setBefore(last);
        setAfter(next + 1);
        break;

      case last:
        setIndex(next);
        setBefore(next - 1);
        setAfter(0);
        break;
      default:
        setIndex(next);
        setBefore(next - 1);
        setAfter(next + 1);
        break;
    }
  };
  const handleLeftClick = () => {
    const last = ProjectsData.length - 1;
    let next: number = index - 1 < 0 ? last : index - 1;
    console.log(next);
    switch (next) {
      case 0:
        setIndex(next);
        setBefore(last);
        setAfter(next + 1);
        break;

      case last:
        setIndex(next);
        setBefore(next - 1);
        setAfter(0);
        break;
      default:
        setIndex(next);
        setBefore(next - 1);
        setAfter(next + 1);
        break;
    }
  };

  return (
    <>
      {/* Desktop */}
      <div
        id="slider-container"
        className="lg:w-max lg:mx-auto lg:flex-shrink-0 lg:p-0 lg:gap-24 lg:overflow-hidden lg:items-center lg:flex snap-x snap-mandatory pb-4 scroll-smooth flex gap-3 flex-nowrap overflow-x-auto relative"
      >
        <Icon
          icon="ph:caret-circle-right-fill"
          width={50}
          height={50}
          className="hidden lg:block mb-5 text-z-yellow right-0 cursor-pointer"
          onClick={handleRightClick}
        />
        {/* <motion.div
          className="absolute lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ x: 200, opacity: [100, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <Icon
            icon="ph:hand-swipe-right"
            width={50}
            height={50}
            className="absolute left-0 top-1/3"
          />
        </motion.div> */}

        <div id="slides" className="hidden lg:flex lg:items-center lg:relative">
          <Link
            href={"/"}
            className="project-items absolute z-1 flex flex-col items-center font-bold gap-3 opacity-40 -right-20"
          >
            <Image
              className="border-[8px] border-z-blue rounded-2xl"
              src={ProjectsData[after].src}
              width={250}
              height={250}
              alt="portfolio"
            ></Image>
            <div>{ProjectsData[after].title}</div>
          </Link>
          <Link
            href={"/"}
            className="project-items flex flex-col items-center font-bold gap-3 z-10"
          >
            <Image
              className="border-[8px] border-z-blue rounded-2xl"
              src={ProjectsData[index].src}
              width={450}
              height={450}
              alt="portfolio"
            ></Image>
            <div>{ProjectsData[index].title}</div>
          </Link>
          <Link
            href={"/"}
            className="project-items flex flex-col items-center font-bold gap-3 absolute z-1 -left-20 opacity-50"
          >
            <Image
              className="border-[8px] border-z-blue rounded-2xl"
              src={ProjectsData[before].src}
              width={250}
              height={250}
              alt="portfolio"
            ></Image>
            <div>{ProjectsData[before].title}</div>
          </Link>
        </div>
        <Icon
          icon="ph:caret-circle-left-fill"
          width={50}
          height={50}
          className="hidden lg:block mb-5 left-0 text-z-yellow cursor-pointer"
          onClick={handleLeftClick}
        />
        {/* MOBILE */}
        {ProjectsData.map((s) => (
          <Link
            href={"/"}
            className="project-items lg:hidden flex flex-col items-center font-bold gap-3"
          >
            <Image
              className="border-[8px] border-z-blue rounded-2xl"
              src={s.src}
              width={450}
              height={450}
              alt="portfolio"
            ></Image>
            <div>{s.title}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
