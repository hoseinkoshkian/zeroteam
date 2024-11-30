import Image from "next/image";
import Link from "next/link";
import Button from "@shared/Button";
import { Icon } from "@iconify/react";
export function SideBar() {
  return (
    <div className="z-[1000] bg-[#ffffffcf] absolute lg:hidden w-full h-screen py-5">
      <div className="bg-white border border-z-border opacity-100 rounded-xl w-[70%] h-full flex flex-col gap-5 p-4">
        <div className="side-header flex justify-between">
          <Image
            alt="zeroteam-logo"
            src={"/logo.svg"}
            height={40}
            width={100}
            className="col-span-2"
          ></Image>
          <Icon
            icon="heroicons:x-mark"
            width={45}
            height={45}
            className="col-span-1 bg-z-border p-2 rounded-lg text-z-content"
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
          <div className="side-item px-4 py-5 flex gap-2 items-center">
            <Icon
              icon="heroicons:academic-cap-16-solid"
              width={20}
              height={20}
              className="text-z-blue"
            />
            <p className="font-bold">دوره های آموزشی</p>
          </div>
          <div className="side-item px-4 py-5 flex gap-2 items-center">
            <Icon
              icon="heroicons:academic-cap-16-solid"
              width={20}
              height={20}
              className="text-z-blue"
            />
            <p className="font-bold">مسیرهای یادگیری</p>
          </div>
          <div className="side-item px-4 py-5 flex gap-2 items-center">
            <Icon
              icon="heroicons:academic-cap-16-solid"
              width={20}
              height={20}
              className="text-z-blue"
            />
            <p className="font-bold">زیروبلاگ</p>
          </div>
          <div className="side-item px-4 py-5 flex gap-2 items-center">
            <Icon
              icon="heroicons:academic-cap-16-solid"
              width={20}
              height={20}
              className="text-z-blue"
            />
            <p className="font-bold">پروژه ها | showcase</p>
          </div>
          <div className="side-item px-4 py-5 flex gap-2 items-center">
            <Icon
              icon="heroicons:academic-cap-16-solid"
              width={20}
              height={20}
              className="text-z-blue"
            />
            <p className="font-bold">درباره ما</p>
          </div>
          <div className="side-item px-4 py-5 flex gap-2 items-center">
            <Icon
              icon="heroicons:academic-cap-16-solid"
              width={20}
              height={20}
              className="text-z-blue"
            />
            <p className="font-bold">تماس با ما</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Header() {
  return (
    <>
      <SideBar />
      {/* desktop */}
      <header className="py-10 hidden lg:block">
        <div className="flex gap-5 items-center text-sm justify-between">
          <Image
            alt="zeroteam-logo"
            src={"/logo.svg"}
            height={100}
            width={100}
          ></Image>
          {/* desktop */}
          <nav className="nav-items flex gap-20 justify-center font-bold">
            <Link href="/dashboard">دوره های آموزشی</Link>
            <Link href="/dashboard">مسیرهای یادگیری</Link>
            <Link href="/dashboard">زیروبلاگ</Link>
            <Link href="/dashboard">پروژه ها‌ | showcase</Link>
            <Link href="/dashboard">درباره ما</Link>
            <Link href="/dashboard">تماس با ما</Link>
          </nav>
          {/* mobile */}
          <div className="flex gap-5">
            <Button intent="blue" text="فرصت همکاری" />
            <Button intent="yellow" text="ورود | ثبت نام" />
          </div>
        </div>
      </header>
      {/* mobile */}
      <header className=" lg:hidden py-8 grid grid-cols-3 items-center">
        <Icon
          icon="heroicons:bars-3-bottom-right-solid"
          width={45}
          height={45}
          className="col-span-1 bg-[#EBEBEB] p-2 rounded-lg text-z-content"
        />
        <Image
          alt="zeroteam-logo"
          src={"/logo.svg"}
          height={50}
          width={120}
          className="col-span-2"
        ></Image>
      </header>
    </>
  );
}
