import Image from "next/image";
import Link from "next/link";
import Button from "@shared/Button";
import { Icon } from "@iconify/react";
export default function Header() {
  return (
    <>
      {/* desktop */}
      <header className="py-10 sm:hidden lg:block">
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
      <header className="lg:hidden py-8 grid grid-cols-3 items-center">
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
