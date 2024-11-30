import LandingTitle from "@shared/LandingTitle";
import Button from "./components/shared/Button";
import coverImg from "../assets/coiver.jpg";
import BoxItem from "@components/BoxItem/BoxItem";
import OrderItem from "./components/OrderItems/OrderItem";
import ProjectSlider from "./components/Project Slider/ProjectSlider";
import Paths from "./components/OrderItems/Paths";
export default function Main() {
  // console.log(coverImg)
  return (
    <main className="flex flex-col gap-16 lg:gap-20">
      <section
        id="hero-section"
        className="flex flex-col-reverse gl:pt-4 items-center justify-center gap-10 lg:flex-row lg:gap-20"
      >
        <div className="flex flex-col gap-5 lg:gap-10">
          <h1 className="font-heavy text-6xl leading-relaxed text-nowrap hidden lg:block">
            همه چیز از یک <span className="text-z-yellow">صفر</span> <br />
            شروع شـــــــــــــد
          </h1>
          <h1 className="font-mostbold lg:hidden text-2xl">
            {" "}
            همه چیز از یک <span className="text-z-yellow">صفر</span> شروع شد
          </h1>
          <div className="call-to-actions flex gap-5 justify-center">
            <Button text="مسیر یادگیری" intent="blue" />
            <Button text="مشاوره رایگان" intent="outlineY" />
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
      <section id="why-zero" className="flex flex-col gap-20 sm:hidden">
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
      <section
        id="projects"
        className="flex flex-col gap-10 lg:gap-20 relative"
      >
        <LandingTitle text="پروژه های ما" intent="yellow" />
        <ProjectSlider />
      </section>
      <section className="flex flex-col gap-10" id="cooperation-path">
        <LandingTitle text="مسیر همکاری" intent="yellow" />
        {/* Desktop */}
        <OrderItem text={"asdfds"} title={"title"} img={"design"} number={1} dir={true} />
        {/* <Paths extra="path-items hidden lg:block" /> */}
        {/* Mobile */}
        {/* <Paths extra="path-items flex flex-col gap-0 lg:hidden" /> */}
      </section>
    </main>
  );
}
