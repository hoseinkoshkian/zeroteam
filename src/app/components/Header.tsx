import Image from "next/image";
import Link from "next/link";
import Button from "@shared/Button";
export default function Header() {
  return (
    <header className="py-10 ">
      <div className="flex gap-5 items-center text-sm justify-between">
        <Image
          alt="zeroteam-logo"
          src={"/logo.svg"}
          height={100}
          width={100}
        ></Image>
        <nav className="nav-items flex gap-12 font-bold">
          <Link href="/dashboard">دوره های آموزشی</Link>
          <Link href="/dashboard">مسیرهای یادگیری</Link>
          <Link href="/dashboard">زیروبلاگ</Link>
          <Link href="/dashboard">پروژه ها‌ | showcase</Link>
          <Link href="/dashboard">درباره ما</Link>
          <Link href="/dashboard">تماس با ما</Link>
        </nav>
        <div className="flex gap-5">
          <Button intent="blue" text="فرصت همکاری" />
          <Button intent="yellow" text="ورود | ثبت نام" />
        </div>
      </div>
    </header>
  );
}
