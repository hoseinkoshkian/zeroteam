"use client";

import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import srcreenImg from "./screen.png";
import "./style.css";
import { Icon } from "@iconify/react/dist/iconify.js";

import { useAnimate } from "motion/react";

export default function ProjectSlider() {
  // const [scope, animate] = useAnimate()
  // const Component = React.forwardRef((props, ref) => {
  //   return <div ref={ref} />;
  // });

  // const MotionComponent = motion(Component);
  return (
    <>
      <div
        id="slider-container"
        className="snap-x pb-4 scroll-smooth flex gap-3 flex-nowrap overflow-x-auto lg:flex lg:justify-center relative"
      >
        <motion.div
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
        </motion.div>

        <Link
          href={"/"}
          className="project-items flex flex-col items-center font-bold gap-3"
        >
          <Image
            className="border-[8px] border-z-blue rounded-2xl"
            src={srcreenImg.src}
            width={450}
            height={450}
            alt="portfolio"
          ></Image>
          <div>درنا</div>
        </Link>
        <Link
          href={"/"}
          className="project-items flex flex-col items-center font-bold gap-3"
        >
          <Image
            className="border-[8px] border-z-blue rounded-2xl"
            src={srcreenImg.src}
            width={450}
            height={450}
            alt="portfolio"
          ></Image>
          <div>درنا</div>
        </Link>
        <Link
          href={"/"}
          className="project-items flex flex-col items-center font-bold gap-3"
        >
          <Image
            className="border-[8px] border-z-blue rounded-2xl"
            src={srcreenImg.src}
            width={450}
            height={450}
            alt="portfolio"
          ></Image>
          <div>درنا</div>
        </Link>
      </div>
    </>
  );
}
