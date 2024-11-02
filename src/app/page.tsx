import LandingTitle from "@shared/LandingTitle";
import Button from "./components/shared/Button";
import coverImg from "../assets/coiver.jpg";
export default function Main() {
  // console.log(coverImg)
  return (
    <main>
      <section id="hero-section" className="flex gap-20 py-20 items-center justify-between">
        <div className="hero-right flex flex-col gap-10 w-full ">
          <h1 className="font-heavy text-6xl leading-relaxed">
            همه چیز از یک <span className="text-z-yellow">صفر</span>{" "}
            <br />
            شروع شـــــــــــــد
          </h1>
          <div className="call-to-actions flex gap-5">
            <Button text="مسیر یادگیری" intent="blue"/>
            <Button text="مشاوره رایگان" intent="outlineY" />
          </div>
        </div>

        <div className="hero-left w-full">
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
      <section id="why-zero">
        {/* <LandingTitle text="چرا ما ؟ چرا زیروتیم ؟" intent="yellow" /> */}
      </section>
      <section id="projects"></section>
      <section id="cooperation-path"></section>
    </main>
  );
}
