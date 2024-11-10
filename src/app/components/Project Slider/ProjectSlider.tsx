"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import srcreenImg from "./screen.png";

export default function ProjectSlider() {
  // const [  ]
  return (
    <div className="flex justify-center gap-10 flex-nowrap w-full overflow-x-scroll">
      <Link href={"/"} className="flex justify-center w-max mx-auto">
        <Image
          className="border-[8px] border-z-blue rounded-2xl"
          src={srcreenImg.src}
          width={450}
          height={450}
          alt="portfolio"
        ></Image>
      </Link>
      <Link href={"/"} className="flex justify-center w-max  mx-auto">
        <Image
          className="border-[8px] border-z-blue rounded-2xl"
          src={srcreenImg.src}
          width={450}
          height={450}
          alt="portfolio"
        ></Image>
      </Link>
      <Link href={"/"} className="flex justify-center w-max  mx-auto">
        <Image
          className="border-[8px] border-z-blue rounded-2xl"
          src={srcreenImg.src}
          width={450}
          height={450}
          alt="portfolio"
        ></Image>
      </Link>
    </div>
  );
}
