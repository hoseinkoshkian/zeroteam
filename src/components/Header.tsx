"use client";
// import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import Button from "@shared/Button";
import { Icon } from "@iconify/react";
import { useRef, useState, useEffect } from "react";
import React, { SetStateAction } from "react";
import { usePathname } from "next/navigation";
type SideBarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};
export function SideBar({ isOpen, setIsOpen }: SideBarProps) {
  function handleClick() {
    setIsOpen(false);
  }
  return (
    <div
      className={`${
        isOpen ? "" : "hidden"
      } z-[1000] bg-[#ffffffcf] fixed lg:hidden w-full h-screen pt-4 pb-4 pr-4`}
    >
      <div className="bg-white border border-z-border opacity-100 rounded-xl w-[80%] h-full flex flex-col gap-5 p-4 shadow-2xl">
        <div className="side-header flex justify-between">
          <ExportedImage
            alt="zeroteam-logo"
            src={"/logo.svg"}
            height={40}
            width={100}
            className="col-span-2"
          ></ExportedImage>
          <Icon
            icon="heroicons:x-mark"
            width={45}
            height={45}
            className="col-span-1 bg-z-border p-2 rounded-lg text-z-content"
            onClick={handleClick}
          />
        </div>
        <div className="search-bar relative flex py-3 px-2 justify-between border border-z-border outline-none w-full rounded-lg">
          <input
            type="text"
            name="search"
            id=""
            className="focus:outline-none rounded-lg w-4/5 font-bold pr-3"
            placeholder="جستجو"
          />
          <Icon
            icon="heroicons:magnifying-glass-solid"
            width={27}
            height={27}
            className="text-z-border"
          />
        </div>
        <div className="side-items flex flex-col divide-y">
          <Link
            href={"/blog"}
            className="side-item px-4 py-5 flex gap-2 items-center"
          >
            <Icon
              icon="heroicons:academic-cap-16-solid"
              width={20}
              height={20}
              className="text-z-blue"
            />
            <p className="font-bold">مقاله ها</p>
          </Link>
          <Link
            href={"/about-us"}
            className="side-item px-4 py-5 flex gap-2 items-center"
          >
            <Icon
              icon="heroicons:academic-cap-16-solid"
              width={20}
              height={20}
              className="text-z-blue"
            />
            <p className="font-bold">درباره ما</p>
          </Link>
          <Link
            href={"/contact-us"}
            className="side-item px-4 py-5 flex gap-2 items-center"
          >
            <Icon
              icon="heroicons:academic-cap-16-solid"
              width={20}
              height={20}
              className="text-z-blue"
            />
            <p className="font-bold">تماس با ما</p>
          </Link>
          <div className="side-item px-4 py-5 flex gap-2 items-center">
            <Icon
              icon="heroicons:academic-cap-16-solid"
              width={20}
              height={20}
              className="text-z-blue"
            />
            <p className="font-bold">پروژه ها</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  // console.log();
  function handleClick() {
    setIsOpen((prev) => !prev);
  }
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* {pathname.} */}
      {/* desktop */}
      <header className="py-8 hidden lg:block border-b border-b-z-border mb-10">
        <div className="lg:flex lg:items-center lg:text-sm lg:container lg:mx-auto lg:justify-between ">
          <Link href={"/"} className="cursor-pointer">
            <ExportedImage
              alt="zeroteam-logo"
              src={"/logo.svg"}
              width={100}
              height={30}
            ></ExportedImage>
          </Link>
          {/* desktop */}
          <nav className="nav-items lg:gap-5 xl:gap-10 2xl:gap-20 lg:justify-between flex font-bold">
            <Link href="/projects" className="links text-nowrap hover:link-nav">
              پروژه ها
            </Link>
            <Link href="/academy" className="hover:link-nav">
              آکادمی
            </Link>
            <Link href="/blog" className="hover:link-nav">
              مقاله ها
            </Link>
            <Link href="/about-us" className="flex hover:link-nav">
              درباره ما
            </Link>
            <Link href="/contact-us" className="flex hover:link-nav">
              تماس با ما
            </Link>
          </nav>
          {/* mobile */}
          <div className="flex lg:gap-2 xl:gap-5">
            <Link href="/job-opportunities" className="btn-z-yellow">
              فرصت همکاری
            </Link>
            <Link href="/auth" className="btn-z-blue flex gap-2">
              <Icon icon="ph:sign-in-duotone" width={24} height={24} />
              ورود | ثبت نام
            </Link>
          </div>
        </div>
      </header>
      {/* mobile */}
      <header>
        <div className="lg:hidden py-4 grid grid-cols-3 items-center mb-5 container mx-auto mobile-container">
          <Icon
            icon="heroicons:bars-3-bottom-right-solid"
            width={45}
            height={45}
            className="col-span-1 bg-[#EBEBEB] p-2 rounded-lg text-z-content"
            onClick={handleClick}
          />
          <Link href={"/"} className="flex justify-center">
            <ExportedImage
              alt="zeroteam-logo"
              src={"/logo.svg"}
              height={50}
              width={120}
              className="col-span-2"
            ></ExportedImage>
          </Link>
        </div>
      </header>
    </>
  );
}
