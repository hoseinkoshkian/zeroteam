import LandingTitle from "@shared/LandingTitle";
import Button from "./components/shared/Button";
import coverImg from "../assets/coiver.jpg";
import BoxItem from "@components/BoxItem/BoxItem";
import OrderItem from "./components/OrderItems/OrderItem";
import ProjectSlider from "./components/Project Slider/ProjectSlider";
export default function Main() {
  // console.log(coverImg)
  return (
    <main className="flex flex-col gap-16 lg:gap-20">
      <section
        id="hero-section"
        className="flex flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:gap-20"
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

        <div className="w-full">
          <video
            width="320"
            height="240"
            // controls
            preload="none"
            className="h-full w-full mx-auto rounded-2xl overflow-hidden object-cover"
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
      {/* test */}
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
      <section id="projects" className="flex flex-col gap-20 relative">
        <LandingTitle text="پروژه های ما" intent="yellow" />
        <ProjectSlider />
      </section>
      <section className="flex flex-col gap-10" id="cooperation-path">
        <LandingTitle text="مسیر همکاری" intent="yellow" />
        {/* desktop */}
        <div className="path-items hidden lg:block">
          <OrderItem
            text="در اولین قدم، جلسه‌ای برای آشنایی با شما و درک دقیق نیازها و اهداف پروژه برگزار می‌کنیم. در این مرحله، ما به نیازهای شما گوش می‌دهیم و سوالات لازم را مطرح می‌کنیم تا به تمام جزئیات پروژه آگاه شویم."
            title="شناخت نیاز ها"
            intent={"reqs"}
            number={1}
            dir={true}
          />
          <OrderItem
            text="نسبت به شرایط و نیازهای مرحله قبلی طراحی مفهومی یا طراحی بصری با توجه به هویت برند شما انجام میشه. طراحی کامپوننت های پایه ، طراحی herosection ها ، طراحی صفحات پایه و اصلی و هر آنچه در نگاه کاربر جلوه خواهد کرد"
            title="طراحی مفهومی"
            intent={"design"}
            number={2}
            dir={false}
          />
          <OrderItem
            text="در اولین قدم، جلسه‌ای برای آشنایی با شما و درک دقیق نیازها و اهداف پروژه برگزار می‌کنیم. در این مرحله، ما به نیازهای شما گوش می‌دهیم و سوالات لازم را مطرح می‌کنیم تا به تمام جزئیات پروژه آگاه شویم."
            title="توسعه پیاده سازی و تست"
            intent={"develop"}
            number={3}
            dir={true}
          />
          <OrderItem
            text="مهم ترین مرحله هر نرم افزار یا محصول تولید شده به قسمت نگهداری maintain اون برمیگرده که در مجموعه برنامه نویسی zeroteam سعی شده بیشترین سرمایه در این قسمت صرف شود .."
            title="پشتیبانی و آموزش"
            intent={"support"}
            number={4}
            dir={false}
          />
        </div>
        {/* mobile */}
        <div className="path-items flex flex-col gap-0 lg:hidden">
          <OrderItem
            text="در اولین قدم، جلسه‌ای برای آشنایی با شما و درک دقیق نیازها و اهداف پروژه برگزار می‌کنیم. در این مرحله، ما به نیازهای شما گوش می‌دهیم و سوالات لازم را مطرح می‌کنیم تا به تمام جزئیات پروژه آگاه شویم."
            title="شناخت نیاز ها"
            intent={"reqs"}
            number={1}
            dir={true}
          />
          <OrderItem
            text="نسبت به شرایط و نیازهای مرحله قبلی طراحی مفهومی یا طراحی بصری با توجه به هویت برند شما انجام میشه. طراحی کامپوننت های پایه ، طراحی herosection ها ، طراحی صفحات پایه و اصلی و هر آنچه در نگاه کاربر جلوه خواهد کرد"
            title="طراحی مفهومی"
            intent={"design"}
            number={2}
            dir={false}
          />
          <OrderItem
            text="در اولین قدم، جلسه‌ای برای آشنایی با شما و درک دقیق نیازها و اهداف پروژه برگزار می‌کنیم. در این مرحله، ما به نیازهای شما گوش می‌دهیم و سوالات لازم را مطرح می‌کنیم تا به تمام جزئیات پروژه آگاه شویم."
            title="توسعه پیاده سازی و تست"
            intent={"develop"}
            number={3}
            dir={true}
          />
          <OrderItem
            text="مهم ترین مرحله هر نرم افزار یا محصول تولید شده به قسمت نگهداری maintain اون برمیگرده که در مجموعه برنامه نویسی zeroteam سعی شده بیشترین سرمایه در این قسمت صرف شود .."
            title="پشتیبانی و آموزش"
            intent={"support"}
            number={4}
            dir={false}
          />
        </div>
      </section>
    </main>
  );
}
