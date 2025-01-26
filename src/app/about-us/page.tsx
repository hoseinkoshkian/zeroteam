import { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import banner from "@assets/about-us-banner.png";
import InfoBox from "@components/InfoBox/InfoBox";
import Breadcrumb from "@components/Breadcrumb";

export const metadata: Metadata = {
  title: "تماس با ما",
};

export default function AboutUs() {
  return (
    <>
      {/* <Breadcrumb /> */}
      <div className="container mx-auto flex flex-col gap-12" id="body">
        <div className="hero flex flex-col justify-between items-center gap-10 lg:flex-row">
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
          <ExportedImage
            src={banner.src}
            alt="about-us-banner.png"
            width={400}
            height={400}
            priority
          ></ExportedImage>
        </div>
        <div className="info-boxes flex flex-col gap-8 lg:flex-row lg:justify-center">
          <InfoBox text="اصفهان ، دروازه دولت (سپه) ، ساختمان ب پلاک 12"></InfoBox>
          <InfoBox text="اصفهان ، دروازه دولت (سپه) ، ساختمان ب پلاک 12"></InfoBox>
          <InfoBox text="اصفهان ، دروازه دولت (سپه) ، ساختمان ب پلاک 12"></InfoBox>
        </div>
      </div>
    </>
  );
}
