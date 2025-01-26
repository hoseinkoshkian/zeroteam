// "use client";
import ExportedImage from "next-image-export-optimizer";
import PostImage from "@assets/post-card-image.jpg";
// import PostImageRes from "@assets/post-card-image-res.jpg";
import Button from "@shared/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Tag from "@components/Tag/Tag";
import PostCard from "@components/PostCar/PostCard";
// import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "@components/Slider/Slider";
// import SliderItem from "@components/Slider/SliderItem";
import ProfileImg from "@assets/profile.jpg";
import "swiper/css";
import Link from "next/link";
export async function generateStaticParams() {
  //   const posts = await fetch("https://.../posts").then((res) => res.json());

  //   return posts.map((post) => ({
  //     slug: post.slug,
  //   }));
  const sampleData = [{ slug: "artificial-intelligence" }];
  return sampleData.map((item) => ({
    slug: item.slug,
  }));
}
export default async function PostSingle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // const slug = (await params).slug;
  return (
    <>
      <div className="flex flex-col gap-5 lg:gap-10">
        <div
          id="post-preview"
          className="container mx-auto flex flex-col gap-5 lg:flex-row-reverse lg:justify-between"
        >
          <div id="post-image" className="">
            <ExportedImage
              src={PostImage.src}
              alt="post-image"
              width={800}
              height={400}
              className="w-[500px] h-[300px] lg:w-[800px] lg:h-[400px] rounded-xl object-cover"
            />
          </div>
          <div
            id="post-info-preview"
            className="flex flex-col gap-5 lg:self-center"
          >
            <h1 className="font-extrabold text-2xl lg:text-3xl">
              هوش مصنوعی کوپایلت به بازار می آید - انقلاب سوم
            </h1>
            <div
              id="post-more-details"
              className="flex flex-col justify-start gap-5 lg:flex-row lg:flex-wrap lg:gap-8"
            >
              <div id="post-category" className="flex gap-1 items-center">
                <Icon
                  icon={"ph:books-duotone"}
                  width={24}
                  height={24}
                  className="text-z-blue"
                ></Icon>
                <h2 className="hover:link-nav flex-shrink flex-grow-0 truncate">
                  هوش مصنوعی - تصنعیات
                </h2>
              </div>
              <div id="row-info" className="flex gap-2">
                <div id="post-time" className="flex gap-1">
                  <Icon
                    icon={"ph:calendar-minus-duotone"}
                    width={24}
                    height={24}
                    className="text-z-blue"
                  ></Icon>
                  <h2 className="hover:link-nav">۲۴ دقیقه پیش</h2>
                </div>
                <div id="post-comments-count" className="flex gap-1">
                  <Icon
                    icon={"ph:chat-circle-text-duotone"}
                    width={24}
                    height={24}
                    className="text-z-blue"
                  ></Icon>
                  <h2 className="hover:link-nav">۳۲ نظر</h2>
                </div>
              </div>
              <div
                id="post-category"
                className="flex gap-1 items-center lg:w-full"
              >
                <Icon
                  icon={"ph:user-circle-check-duotone"}
                  width={24}
                  height={24}
                  className="text-z-blue"
                ></Icon>
                <h2 className="hover:link-content flex-shrink flex-grow-0 truncate font-semibold">
                  محمد یوسفی
                </h2>
              </div>
            </div>
            <div className="fixed-items">
              <div
                id="save-share"
                className="flex gap-3 px-2 py-2 bg-z-low-yellow rounded-lg w-fit"
              >
                <Icon
                  icon={"ph:bookmark-simple"}
                  width={28}
                  height={28}
                  className="text-z-yellow"
                ></Icon>
                <Icon
                  icon={"ph:link"}
                  width={28}
                  height={28}
                  className="text-z-yellow"
                ></Icon>
              </div>
            </div>
          </div>
        </div>
        <div
          id="post-body"
          className="container mx-auto flex flex-col gap-5 lg:grid lg:grid-cols-6 lg:auto-rows-auto lg:gap-10 relative"
        >
          <article
            id="post-content"
            className="prose-p:leading-loose prose-p:text-justify prose-img:rounded-xl prose-img:object-cover  prose-headings:font-mostbold prose-a:link-content flex flex-col gap-2 justify-center lg:gap-4 lg:col-span-4"
          >
            <p>
              یکی از کارهایی که این دستیار می‌تواند انجام دهد و در بالا هم به آن
              اشاره شد، این هست که شما منطقِ کدی که می‌خواهید را در یک خط توصیف
              می‎کنید و این دستیار تکه کدی را برایتان می‌نویسد که خروجی مورد
              نظرتان را تولید می‌کند. فقط نکته جالبی که وجود دارد این است که
              می‌توانید این توصیف لاجیکی خودتان را در اسم آن تابع هم بنویسید و
              این دستیار می‌تواند خیلی راحت منطق شما را تشخیص دهد.
            </p>
            <h1 className="font-extrabold text-xl">Ai Pair Programmer</h1>
            <p>
              یکی از کارهایی که این دستیار می‌تواند انجام دهد و در بالا هم به آن
              اشاره شد، این هست که شما منطقِ کدی که می‌خواهید را در یک خط توصیف
              می‎کنید و این دستیار تکه کدی را برایتان می‌نویسد که خروجی مورد
              نظرتان را تولید می‌کند. فقط نکته جالبی که وجود دارد این است که
              می‌توانید این توصیف لاجیکی خودتان را در اسم آن تابع هم بنویسید و
              این دستیار می‌تواند خیلی راحت منطق شما را تشخیص دهد.
            </p>
            <ExportedImage
              src={PostImage.src}
              alt="a;sdflk"
              width={400}
              height={300}
              className="rounded-xl"
            />
            <p>
              {" "}
              یکی از کارهایی که این دستیار می‌تواند انجام دهد و در بالا هم به آن
              اشاره شد، این هست که شما منطقِ کدی که می‌خواهید را در یک خط توصیف
              می‎کنید و این دستیار تکه کدی را برایتان می‌نویسد که خروجی مورد
              نظرتان را تولید می‌کند. فقط نکته جالبی که وجود دارد این است که
              می‌توانید این توصیف لاجیکی خودتان را در اسم آن تابع هم بنویسید و
              این دستیار می‌تواند خیلی راحت منطق شما را تشخیص دهد. یکی از
              کارهایی که این دستیار می‌تواند انجام دهد و در بالا هم به آن اشاره
              شد، این هست که شما منطقِ کدی که می‌خواهید را در یک خط توصیف
              می‎کنید و این دستیار تکه کدی را برایتان می‌نویسد که خروجی مورد
              نظرتان را تولید می‌کند. فقط نکته جالبی که وجود دارد این است که
              می‌توانید این توصیف لاجیکی خودتان را در اسم آن تابع هم بنویسید و
              این دستیار می‌تواند خیلی راحت منطق شما را تشخیص دهد. یکی از
              کارهایی که این دستیار می‌تواند انجام دهد و در بالا هم به آن اشاره
              شد، این هست که شما منطقِ کدی که می‌خواهید را در یک خط توصیف
              می‎کنید و این دستیار تکه کدی را برایتان می‌نویسد که خروجی مورد
              نظرتان را تولید می‌کند. فقط نکته جالبی که وجود دارد این است که
              می‌توانید این توصیف لاجیکی خودتان را در اسم آن تابع هم بنویسید و
              این دستیار می‌تواند خیلی راحت منطق شما را تشخیص دهد.یکی از کارهایی
              که این دستیار می‌تواند انجام دهد و در بالا هم به آن اشاره شد، این
              هست که شما منطقِ کدی که می‌خواهید را در یک خط توصیف می‎کنید و این
              دستیار تکه کدی را برایتان می‌نویسد که خروجی مورد نظرتان را تولید
              می‌کند. فقط نکته جالبی که وجود دارد این است که می‌توانید این توصیف
              لاجیکی خودتان را در اسم آن تابع هم بنویسید و این دستیار می‌تواند
              خیلی راحت منطق شما را تشخیص دهد.
            </p>
          </article>
          <aside
            id="post-sidebar"
            className="hidden lg:flex lg:col-span-2 lg:flex-col lg:justify-start lg:w-full lg:relative lg:row-span-3"
          >
            <div className="sidebar-container  lg:sticky lg:top-10 flex flex-col gap-5">
              <section
                id="post-content-list"
                className="p-4 border-2 border-z-border rounded-xl w-full lg:flex lg:flex-col lg:gap-3"
              >
                <div
                  id="title-of-content-list"
                  className="flex gap-1 items-center"
                >
                  <Icon
                    icon={"ph:list-bullets-duotone"}
                    width={28}
                    height={28}
                    className="text-z-blue"
                  ></Icon>
                  <h2 className="flex-shrink flex-grow-0 font-extrabold">
                    لیست مطالب
                  </h2>
                </div>
                <div className="list-of-items w-full flex flex-col gap-3">
                  <Link
                    href={"/#1"}
                    className="px-3 py-2 hover:bg-z-border w-full rounded-lg"
                  >
                    سیستم Ai Pair Programming
                  </Link>
                  <Link
                    href={"/#1"}
                    className="px-3 py-2 hover:bg-z-border w-full rounded-lg"
                  >
                    سیستم Ai Pair Programming
                  </Link>
                  <Link
                    href={"/#1"}
                    className="px-3 py-2 hover:bg-z-border w-full rounded-lg"
                  >
                    سیستم Ai Pair Programming
                  </Link>
                  <Link
                    href={"/#1"}
                    className="px-3 py-2 hover:bg-z-border w-full rounded-lg"
                  >
                    سیستم Ai Pair Programming
                  </Link>
                </div>
              </section>
              <section
                id="post-comments-ancher"
                className="p-4 border-2 border-z-yellow rounded-xl w-full lg:flex lg:flex-col lg:gap-3 hover:bg-z-low-yellow"
              >
                <Link
                  id="title-of-content-list"
                  className="flex gap-1 items-center"
                  href={"#comments"}
                >
                  <Icon
                    icon={"ph:chats-circle-duotone"}
                    width={28}
                    height={28}
                    className="text-z-yellow"
                  ></Icon>
                  <h2 className="flex-shrink flex-grow-0 font-extrabold text-z-yellow">
                    نظرات و پیشنهادات
                  </h2>
                </Link>
              </section>
            </div>
          </aside>
          <div id="tags" className="flex flex-wrap gap-2 col-span-4 h-fit">
            <Tag text="#تکامل" style="regular" />
            <Tag text="#هوش مصنوعی" style="regular" />
            <Tag text="#گیت هاب" style="regular" />
            <Tag text="گزارش محتوا" style="report" />
          </div>
          <div className="comments col-span-4 w-full flex flex-col gap-5">
            <div id="comments" className="flex flex-col gap-7">
              <div id="comments-header" className="flex justify-between">
                <div id="title-of-comments" className="flex gap-1 items-center">
                  <Icon
                    icon={"ph:chats-circle-duotone"}
                    width={32}
                    height={32}
                    className="text-z-yellow"
                  ></Icon>
                  <h2 className="flex-shrink flex-grow-0 font-extrabold text-xl">
                    نظرات و پیشنهادات
                  </h2>
                </div>
                <div className="add-comment">
                  <Button
                    text="دیدگاه جدید"
                    styles="btn-z-outline-yellow"
                    size="base"
                  ></Button>
                </div>
              </div>
              <div className="no-comments w-full bg-z-low-yellow px-4 py-3 text-z-yellow rounded-xl text-center">
                هیچ کامنتی وجود ندارد :(
              </div>
            </div>
            <div className="add-comment-box flex flex-col justify-between gap-5 lg:flex-row">
              <textarea
                name="your-comment"
                id="add-comments-input"
                rows={3}
                className="px-4 py-3 scroll-smooth scrollbar-thin overflow-y-clip w-full bg-z-border focus:outline-none rounded-lg focus:ring-2 focus:ring-z-content focus:border-z-content"
              ></textarea>
              <Button
                text="ارسال دیدگاه"
                styles="btn-z-bg-gray"
                size="base"
                className="w-fit self-end grow shrink-0"
              />
            </div>

            <div className="comment-box-container">
              <div className="comment-box bg-z-border px-5 py-5 border-r-4 border-z-yellow rounded-e-lg flex flex-col gap-3 lg:gap-5">
                <div className="comment-box-header flex justify-between items-center w-full">
                  <div className="comment-header-primary flex gap-2 items-center">
                    <ExportedImage
                      src={ProfileImg.src}
                      width={40}
                      height={40}
                      alt="profile"
                      className="rounded-lg"
                    ></ExportedImage>
                    <p className="commentator-name font-semibold truncate">
                      محمدامین سعیدی راد
                    </p>
                    <div className="user-indicator flex gap-1"></div>
                  </div>
                  <div className="comment-header-secodary w-fit">
                    <p className="font-bold text-z-poor-content text-sm">
                      ۲ روز و ۳ دقیقه پیش
                    </p>
                  </div>
                </div>
                <p className="comment-box-body leading-loose text-justify text-sm">
                  سلام اول تشکر میکنم از جناب براتی برای دوره های‌ خاصشون
                  🫶🏽همچنین یه پیشنهاد داشتم که در صورت امکان پروژه های پیچیده
                  تر ( مثل ساخت بازی شطرنج و بازی های مولتی پلیر ) هم در دوره
                  اضافه بشه. چون واقعا این دوره پتانسیل اینکه یه سطح دیگر و
                  برامون باز کنه داره. من دیدم بازی مثل ماریو هم با جاوا اسکریپت
                  میشه ساخت😵‍💫 در کل بازم تشکر میکنم
                </p>
                <div
                  id="comments-reply"
                  className="reply flex gap-1 items-center self-end hover:bg-z-low-yellow px-3 py-2 rounded-lg hover:ring-2 hover:ring-z-yellow"
                >
                  <Icon
                    icon={"ph:arrow-u-down-left-bold"}
                    width={20}
                    height={20}
                    className="text-z-yellow"
                  ></Icon>
                  <p className="flex-shrink flex-grow-0 text-z-yellow">
                    پاسخ دادن
                  </p>
                </div>
                <div id="add-reply">
                  <div className="add-comment-box flex flex-col justify-between gap-3 lg:flex-row">
                    <textarea
                      name="your-comment"
                      id="add-comments-input"
                      rows={3}
                      className="px-4 py-3 scroll-smooth scrollbar-thin overflow-y-clip w-full focus:outline-none rounded-lg focus:ring-2 focus:ring-z-content focus:border-z-content"
                    ></textarea>
                    <Button
                      text="ارسال دیدگاه"
                      styles="btn-z-yellow"
                      size="sm"
                      className="w-fit self-end grow shrink-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside
          id="post-sidebar"
          className="lg:hidden max-w-none bg-white/75 py-5 fixed bottom-0 w-full z-50 border-t-2 border-z-border"
        >
          <div className="sidebar-container container mx-auto flex justify-between">
            <section id="content-list" className="">
              <Link
                id="title-of-content-list"
                className="flex gap-1 items-center"
                href={"#comments"}
              >
                <Icon
                  icon={"ph:list-bullets"}
                  width={28}
                  height={28}
                  className="text-z-content"
                ></Icon>
                <h2 className="flex-shrink flex-grow-0 text-z-content">
                  سرفصل ها
                </h2>
              </Link>
            </section>
            <section id="comment-ancher" className="">
              <Link
                id="title-of-content-list"
                className="flex gap-1 items-center"
                href={"#comments"}
              >
                <Icon
                  icon={"ph:chat-circle-dots"}
                  width={28}
                  height={28}
                  className="text-z-content"
                ></Icon>
                <h2 className="flex-shrink flex-grow-0 text-z-content">
                  نظرات
                </h2>
              </Link>
            </section>
          </div>
        </aside>

        <div className="related-posts pb-6 w-full mx-auto lg:container lg:mx-auto">
          <Slider
            slides={Array.from({ length: 5 }, (v, i) => (
              <PostCard />
            ))}
          ></Slider>
        </div>
        {/* <div className="divider container mx-auto border-b-2 border-z-border w-full"></div> */}
      </div>
    </>
  );
}
