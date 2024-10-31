import Image from "next/image";
import Link from "next/link";
import Button from "@shared/Button";
export default function Header() {
  return (
    <header className="py-10 ">
      <div className="flex gap-5 items-center text-sm">
        <Image
          alt="zeroteam-logo"
          src={"/logo.svg"}
          height={100}
          width={100}
        ></Image>
        <nav className="nav-items flex gap-5 font-bold">
          <Link href="/dashboard">دوره های آموزشی</Link>
          <Link href="/dashboard">مسیرهای یادگیری</Link>
          <Link href="/dashboard">زیروبلاگ</Link>
          <Link href="/dashboard">پروژه ها‌ | showcase</Link>
          <Link href="/dashboard">درباره ما</Link>
          <Link href="/dashboard">تماس با ما</Link>
        </nav>
        <Button val="فرصت کارآموزی" bg="blue" />
        <Button val="ورود | ثبت نام" bg="yellow" />
        {/* <button className="px-5 py-2 bg-z-yellow text-white rounded-lg">
          فرصت کارآموی
        </button>
        <button className="px-5 py-2 bg-z-blue text-white rounded-lg">
          فرصت کارآموی
        </button> */}
      </div>
    </header>
  );
}
