import Image from "next/image";
import { Icon } from "@iconify/react";
// import PN from "persian-number";
// import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 pt-10 lg:pt-20 border-t-2 border-gray-50 mt-10">
      <div
        id="footer-info"
        className="flex flex-col gap-10 lg:flex-row lg:justify-between"
      >
        <div id="footer-des" className="flex flex-col gap-5 lg:w-1/2 ">
          <Image
            alt="zeroteam-logo"
            src={"/logo.svg"}
            width={100}
            height={100}
          ></Image>
          <h6 id="explanation-zeroteam" className="leading-loose text-justify">
            زیروتیم کیه ؟ زیروتیم چیه ؟ ، تیمی پر تلاطم و کم صبر برای محقق شدن
            ایده های نو با بهترین تکنولوژی ها و ابزارهای موجود در پیاده سازی.
            شاید بهترین تعریف در کوتاه ترین جمله از مجموعه برنامه نویسی زیروتیم
            همین باشه اما پشت این جمله هزاران طلای خاک شده وجود داره که نیاز به
            همراهی شما داره تا به خلق یک سیستم نوظهور پرطرفدار برسه 💙
          </h6>
        </div>
        <div id="footer-links" className="flex gap-10">
          <div id="connect" className="hidden lg:block">
            {/* <Image alt="fake-enemad" src={}></Image> */}
          </div>
          <div className="flex flex-col gap-4 col-span-1">
            <h6 className="font-semibold">خدمات زیروتیم</h6>
            <p>طراحی سایت</p>
            <p>وبلاگ</p>
            <p>زیروپلاس</p>
            <p>زیروسیستم</p>
          </div>
          <div className="flex flex-col gap-4 col-span-1">
            <h6 className="font-semibold">دسترسی سریع</h6>
            <p>درباره ما</p>
            <p>تماس با ما</p>
            <p>فرصت های شغلی</p>
            <p>شرایط و قوانین</p>
          </div>
        </div>
      </div>
      <div
        id="footer-copy-right"
        className="flex flex-col gap-6 lg:w-max lg:mx-auto"
      >
        <p className="font-semibold text-sm text-center">
          کلیه حقوق مادی و معنوی این وب‌سایت متعلق به زیروتیم می باشد
        </p>
        <div
          id="social-box"
          className="bg-[#EEEEEE] p-5 flex justify-between w-1/2 mx-auto rounded-t-2xl"
        >
          <Icon icon="skill-icons:instagram" width={30} height={30} />
          <Icon icon="devicon:linkedin" width={30} height={30} />
          <Icon icon="logos:telegram" width={30} height={30} />
        </div>
      </div>
    </footer>
  );
}
