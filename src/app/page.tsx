import LandingTitle from "@shared/LandingTitle";
import Button from "./components/shared/Button";
import coverImg from "../assets/coiver.jpg";
import BoxItem from "@components/BoxItem/BoxItem";
import OrderItem from "./components/OrderItem";
export default function Main() {
  // console.log(coverImg)
  return (
    <main className="flex flex-col gap-20">
      <section
        id="hero-section"
        className="flex py-20 items-center justify-center gap-20"
      >
        <div className="hero-right flex flex-col gap-10">
          <h1 className="font-heavy text-6xl leading-relaxed text-nowrap">
            همه چیز از یک <span className="text-z-yellow">صفر</span> <br />
            شروع شـــــــــــــد
          </h1>
          <div className="call-to-actions flex gap-5 justify-center">
            <Button text="مسیر یادگیری" intent="blue" />
            <Button text="مشاوره رایگان" intent="outlineY" />
          </div>
        </div>

        <div className="hero-left w-1/2">
          <video
            preload="none"
            className=" h-full rounded-2xl overflow-hidden"
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
      <section id="why-zero" className="flex flex-col gap-20">
        <LandingTitle text="چرا ما ؟ چرا زیروتیم ؟" intent="yellow" />
        <div className="boxes grid grid-cols-2 m-auto w-auto gap-14">
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
      <section id="projects">
        <LandingTitle text="پروژه های ما" intent="yellow" />
      </section>
      <section id="cooperation-path">
      <LandingTitle text="مسیر همکاری" intent="blue" />
      <OrderItem />
      </section>
    </main>
  );
}
