import { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import OpportunitiesImg from "@assets/opportunities-banner.png";
export const metadata: Metadata = {
  title: "فرصت های شغلی",
};
function WordBox({ text }: { text: string }) {
  return (
    <div className="word-box bg-z-border px-8 py-10 flex justify-center border-z-blue border-r-4 border-l-4">
      <p className="font-extrabold text-z-blue text-xl">{text}</p>
    </div>
  );
}
export default function AboutUs() {
  return (
    <>
      <div className="flex flex-col gap-6" id="body">
        <div className="banner">
          <ExportedImage
            src={OpportunitiesImg.src}
            alt="about-us-banner.png"
            width={1440}
            height={332}
            priority
            className="w-full"
          ></ExportedImage>
        </div>

        <div className="container mx-auto info-boxes flex flex-col gap-8">
          <p className="leading-loose text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <div
            id="word-boxes-info"
            className="flex flex-col gap-6 lg:flex-row lg:gap-6 lg:justify-center"
          >
            <WordBox text="تعهد و مسئولیت پذیری"></WordBox>
            <WordBox text="مشتاق به یادگیری"></WordBox>
            <WordBox text="اخلاق مدار و خودمحور"></WordBox>
          </div>
        </div>
      </div>
    </>
  );
}
