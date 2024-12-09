"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import screen1 from "./screen-1.png";
import screen2 from "./screen-2.png";
import screen3 from "./screen-3.png";
import "./style.css";
import { Icon } from "@iconify/react/dist/iconify.js";
interface ProjectsDataInterface {
  src: string;
  title: string;
}
type ProjectDataType = ProjectsDataInterface[];
const ProjectsData: ProjectDataType = [
  {
    src: screen1.src,
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

  const [isAnimating, setIsAnimating] = useState(true);
  function handleAnimation() {
    setIsAnimating(false);
  }
  return (
    <>
      <div id="slider-container" className="">
        {/* Desktop */}
        <div className="lg:h-auto lg:w-max lg:mx-auto lg:flex-shrink-0 lg:p-0 lg:gap-24 lg:overflow-hidden lg:items-center lg:flex">
          <Icon
            icon="ph:caret-circle-right-fill"
            width={50}
            height={50}
            className="hidden lg:block mb-5 text-z-yellow right-0 cursor-pointer"
            onClick={handleRightClick}
          />

          <div
            id="slides"
            className="hidden lg:flex lg:items-center lg:relative "
          >
            <Link
              href={"/"}
              className="project-items absolute z-1 flex flex-col items-center font-bold gap-3 opacity-40 -right-20"
            >
              <Image
                className="border-4 border-z-yellow rounded-2xl"
                src={ProjectsData[after].src}
                width={550}
                height={309}
                alt="portfolio"
              ></Image>
              <div>{ProjectsData[after].title}</div>
            </Link>
            <Link
              href={"/"}
              className="project-items flex flex-col items-center font-bold gap-3 z-10"
            >
              <div className="rounded-2xl bg-gradient-to-b from-z-blue to-z-yellow">
                <Image
                  className="bg-gradient-to-r rounded-[calc(1rem-1px)] p-1 bg-white"
                  src={ProjectsData[after].src}
                  width={700}
                  height={394}
                  alt="portfolio"
                ></Image>
              </div>
              <div>{ProjectsData[index].title}</div>
            </Link>
            <Link
              href={"/"}
              className="project-items flex flex-col items-center font-bold gap-3 absolute z-1 -left-20 opacity-50"
            >
              <Image
                className="border-4 border-z-blue rounded-2xl"
                src={ProjectsData[before].src}
                width={550}
                height={309}
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
        </div>
        {/* MOBILE */}
        <div
          onTouchStart={handleAnimation}
          className="pb-7 gap-5 flex-shrink-0 grow-0 overflow-y-hidden scrollbar scrollbar-thumb-z-content scrollbar-track-current snap-x snap-mandatory scroll-smooth flex flex-nowrap overflow-x-auto relative items-center lg:hidden px-sm"
        >
          {/* hand animation */}
          <motion.div
            className="absolute left-0 top-[25%] lg:hidden text-z-blue"
            initial={{ opacity: 0 }}
            animate={
              isAnimating
                ? {
                    x: [-20, 200],
                    opacity: [0, 10, 50, 80, 100, 80, 50, 10, 0],
                  }
                : {}
            }
            transition={{
              type: "keyframes",
              ease: "easeInOut",
              duration: 2,
              repeat: isAnimating ? Infinity : 0,
              repeatType: "loop",
            }}
            exit={{}}
          >
            <Icon icon="ph:hand-tap-fill" width={80} height={80} className="" />
            <span>اسکرول کنید</span>
          </motion.div>
          {ProjectsData.map((s, i) => (
            <div
              key={i}
              className="project-items lg:hidden flex flex-col items-center font-bold gap-5"
            >
              <div className="rounded-2xl bg-gradient-to-b from-z-blue to-z-yellow">
                <Image
                  className="bg-gradient-to-r rounded-[calc(1rem-1px)] p-1 bg-white"
                  src={ProjectsData[after].src}
                  width={700}
                  height={394}
                  alt="portfolio"
                ></Image>
              </div>
              <div>{s.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
