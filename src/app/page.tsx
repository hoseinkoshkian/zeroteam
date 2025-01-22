"use client";
import LandingTitle from "@shared/LandingTitle";
import Button from "@shared/Button";
import coverImg from "../assets/cover.jpg";
import BoxItem from "@components/BoxItem/BoxItem";
import OrderItem from "@components/OrderItems/OrderItem";
import ProjectSlider from "@components/Project Slider/ProjectSlider";
import zeroLoadingGif from "@assets/zerolaoding.gif";
// import Paths from "./components/OrderItems/Paths";

// import styled from "styled-components";
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: #bf4f74;
// `;
export default function Main() {
  return (
    <div className="flex flex-col gap-16 lg:gap-20">
      {/* <img src={zeroLoadingGif.src} alt="laoding" width={200}/> */}
      <section
        id="hero-section"
        className="flex flex-col-reverse gl:pt-4 items-center justify-between lg:flex-row gap-5 lg:gap-20  container mx-auto"
      >
        <div className="flex flex-col gap-5 lg:gap-10 md:flex-row md:items-center lg:flex-col ">
          <h1 className="font-heavy 2xl:text-6xl lg:text-5xl 2xl:leading-[1.5] lg:leading-[1.5] text-nowrap hidden lg:block">
            همه چیز از یک <span className="text-z-yellow">صفر</span> <br />
            شروع شـــــــــــــد
          </h1>
          <h1 className="font-mostbold lg:hidden text-2xl ">
            {" "}
            همه چیز از یک <span className="text-z-yellow">صفر</span> شروع شد
          </h1>
          <div className="call-to-actions flex gap-5 justify-center">
            <Button text="مسیر یادگیری" style="btn-z-outline-blue" />
            <Button text="مشاوره رایگان" style="btn-z-outline-yellow" />
          </div>
        </div>

        <div className="">
          <video
            width="1200"
            height="700"
            preload="none"
            className="mx-auto rounded-2xl overflow-hidden object-cover"
            poster={coverImg.src}
          >
            <source src="/path/to/video.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section
        id="why-zero"
        className=" flex flex-col gap-10 lg:gap-20  container mx-auto"
      >
        <LandingTitle text="چرا ما ؟ چرا زیروتیم ؟" intent="yellow" />
        <div className="boxes lg:grid lg:grid-cols-2 m-auto w-auto lg:gap-14 flex flex-col gap-5">
          <BoxItem
            intent={"yellow"}
            title="تجربـــــــــــــــــــــــــــــــه"
            text="سال‌ها تجربه در زمینه توسعه نرم‌افزار و کار با صنایع مختلف."
            size={400}
            icon="lamp"
          />
          <BoxItem
            intent={"blue"}
            title="تخصـــــــــــــــــــــص"
            text="تیمی متشکل از متخصصین با مهارت‌های متنوع در برنامه‌نویسی و طراحی"
            size={400}
            icon="tool"
          />
          <BoxItem
            intent={"blue"}
            title="تحویل به موقــــــــــع"
            text="ما به زمانبندی اهمیت می‌دهیم و پروژه‌ها را در زمان معین تحویل می‌دهیم."
            size={400}
            icon="time"
          />
          <BoxItem
            intent={"yellow"}
            title="رویکرد مشتری‌مدار"
            text="ارتباط نزدیک با مشتریان و توجه به نیازهای آن‌ها در تمام مراحل پروژه."
            size={400}
            icon="customer"
          />
        </div>
      </section>
      <section
        id="projects"
        className="flex flex-col gap-10 lg:gap-20 relative"
      >
        <LandingTitle text="پروژه های ما" intent="yellow" />
        <ProjectSlider />
        {/* <div className="h-10 w-24 bg-gray-400 p-px">sdf</div> */}
      </section>
      <section
        className="flex flex-col gap-10"
        id="cooperation-path  container mx-auto"
      >
        <LandingTitle text="مسیر همکاری" intent="yellow" />
        {/* Desktop */}
        <div className="flex-col gap-0">
          <OrderItem
            title={"شناخت نیازها"}
            text={
              "در اولین قدم، جلسه‌ای برای آشنایی با شما و درک دقیق نیازها و اهداف پروژه برگزار می‌کنیم. در این مرحله، ما به نیازهای شما گوش می‌دهیم و سوالات لازم را مطرح می‌کنیم تا به تمام جزئیات پروژه آگاه شویم."
            }
            img={"reqs"}
            number={1}
            dir={true}
          />
          <OrderItem
            title={"طراحی مفهومی"}
            text={
              "نسبت به شرایط و نیازهای مرحله قبلی طراحی مفهومی یا طراحی بصری با توجه به هویت برند شما انجام میشه. طراحی کامپوننت های پایه ، طراحی herosection ها ، طراحی صفحات پایه و اصلی و هر آنچه در نگاه کاربر جلوه خواهد کرد"
            }
            img={"design"}
            number={2}
            dir={false}
          />

          <OrderItem
            title={"توسعه ، پیاده سازی و تست"}
            text={
              "در اولین قدم، جلسه‌ای برای آشنایی با شما و درک دقیق نیازها و اهداف پروژه برگزار می‌کنیم. در این مرحله، ما به نیازهای شما گوش می‌دهیم و سوالات لازم را مطرح می‌کنیم تا به تمام جزئیات پروژه آگاه شویم."
            }
            img={"develop"}
            number={3}
            dir={true}
          />
          <OrderItem
            title={"پشتیبانی و آموزش"}
            text={
              "مهم ترین مرحله هر نرم افزار یا محصول تولید شده به قسمت نگهداری maintain اون برمیگرده که در مجموعه برنامه نویسی zeroteam سعی شده بیشترین سرمایه در این قسمت صرف شود .."
            }
            img={"support"}
            number={4}
            dir={false}
          />
        </div>
        {/* TODO 1-move sample data here 2-edit Paths 3- responsive design*/}
        {/* <Paths extra="path-items hidden lg:block" /> */}
        {/* Mobile */}
        {/* <Paths extra="path-items flex flex-col gap-0 lg:hidden" /> */}
      </section>
    </div>
  );
}
