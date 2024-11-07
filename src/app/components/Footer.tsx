import Image from "next/image";
import { Icon } from "@iconify/react";
import PN from "persian-number";
// import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 pt-10">
      <div id="footer-info" className="flex flex-col gap-10">
        <div id="footer-des" className="flex flex-col gap-5">
          <Image
            alt="zeroteam-logo"
            src={"/logo.svg"}
            width={100}
            height={100}
          ></Image>
          <h6 id="explanation-zeroteam" className="leading-loose text-justify">
            ما در سکان‌آکادمی معتقدیم همه‌ی انسان‌ها حق دارند، به آموزش باکیفیت
            و کم‌هزینه دسترسی آسان داشته باشند و همه‌ی افراد می‌توانند با آموزش
            درست، زندگی فردی و اجتماعی خود را بهتر کنند. با توجه به تخصص تیم ما
            در حوزه‌ی IT و نیاز روزافزون بازار کار به متخصصان این حوزه، تولید و
            عرضه‌ی محتوای مهارت ‌محور و تخصصی را در حوزه‌ی IT جدی‌تر دنبال
            کردیم.
          </h6>
        </div>
        <div id="footer-links" className="flex gap-10">
          <div className="flex flex-col gap-4 col-span-1">
            <h6 className="font-semibold">خدمات زیروتیم</h6>
            <p>طراحی سایت</p>
            <p>وبلاگ</p>
            <p>زیروپلاس</p>
            <p>زیروسیستم</p>
          </div>
          {/* <div className="flex flex-col gap-4 col-span-1">
            <h6 className="font-semibold">دسترسی سریع</h6>
            <p>درباره ما</p>
            <p>تماس با ما</p>
            <p>فرصت های شغلی</p>
            <p>شرایط و قوانین</p>
          </div> */}
          <div className="flex flex-col gap-4 col-span-1">
            <h6 className="font-semibold">راه های ارتباطی</h6>
            <div className="flex gap-1">
              {/* <Icon icon="heroicons:phone-16-solid" width={20} /> */}
              <p>تلفن تماس : </p>
              <p className="font-semibold">{PN.convertEnToPe("09130199470")}</p>
            </div>
            <div className="flex gap-1">
              {/* <Icon icon="heroicons:phone-16-solid" width={20} /> */}
              <p>ایمیل : </p>
              <p className="font-semibold">zerotteam.ir@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="communications" className="flex gap-5">
        <div className="flex gap-2 justify-center items-center">
        <Icon icon="heroicons:phone-16-solid" width={20} />
          <p className="font-semibold">{PN.convertEnToPe("09130199470")}</p>
        </div>
      </div> */}
      <div id="footer-copy-right" className="flex flex-col gap-6">
        <p className="font-semibold text-sm">
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
