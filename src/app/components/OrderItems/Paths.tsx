// import React from 'react'
import OrderItem, { ButtonVariantProps } from "./OrderItem";
import { ElProps } from "src/types/types";
interface PathsTypes extends ElProps {
  text: string;
  title: string;
  img: ButtonVariantProps["img"];
  number: number;
  dir: boolean;
}
export default function Paths({
  text,
  title,
  img,
  number,
  dir,
  extra,
}: PathsTypes) {
  return (
    // <div className={`${extra}`}>
    <OrderItem text={text} title={title} img={img} number={number} dir={dir} />
    //   {/* <OrderItem
    //     text="نسبت به شرایط و نیازهای مرحله قبلی طراحی مفهومی یا طراحی بصری با توجه به هویت برند شما انجام میشه. طراحی کامپوننت های پایه ، طراحی herosection ها ، طراحی صفحات پایه و اصلی و هر آنچه در نگاه کاربر جلوه خواهد کرد"
    //     title="طراحی مفهومی"
    //     img={"design"}
    //     number={2}
    //     dir={false}
    //   />
    //   <OrderItem
    //     text="در اولین قدم، جلسه‌ای برای آشنایی با شما و درک دقیق نیازها و اهداف پروژه برگزار می‌کنیم. در این مرحله، ما به نیازهای شما گوش می‌دهیم و سوالات لازم را مطرح می‌کنیم تا به تمام جزئیات پروژه آگاه شویم."
    //     title="توسعه پیاده سازی و تست"
    //     img={"develop"}
    //     number={3}
    //     dir={true}
    //   />
    //   <OrderItem
    //     text="مهم ترین مرحله هر نرم افزار یا محصول تولید شده به قسمت نگهداری maintain اون برمیگرده که در مجموعه برنامه نویسی zeroteam سعی شده بیشترین سرمایه در این قسمت صرف شود .."
    //     title="پشتیبانی و آموزش"
    //     img={"support"}
    //     number={4}
    //     dir={false}
    //   /> */}
    // </div>
  );
}
