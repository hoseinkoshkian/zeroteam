import React from "react";
import ExportedImage from "next-image-export-optimizer";
import PostImage from "@assets/post-card-image.jpg";
import Link from "next/link";
type PostCardProps = {
  title?: string;
  readingTime?: string;
  author?: string;
  date?: string;
  image?: string;
  slug?: string;
  profileSlug?: string;
};
export default function PostCard({
  title,
  readingTime,
  author,
  date,
  image,
  slug,
  profileSlug,
}: PostCardProps) {
  return (
    <Link href={"/blog/artificial-intelligence"} className="relative hover:z-50">
      <div className="post-card flex flex-col w-96 p-5 lg:w-80 lg:p-0 transition-all hover:scale-105 hover:transition-all hover:ease-out">
        <div className="post-image">
          <ExportedImage
            src={PostImage.src}
            width={500}
            height={360}
            alt="post-alt-image"
            className="rounded-2xl"
            priority
          ></ExportedImage>
        </div>
        <div className="post-details px-4">
          <div className="content flex flex-col gap-2 border-2 border-t-0 bg-[#FBFBFB] rounded-b-2xl px-4 py-3 h-28 justify-between">
            <h2 className="font-bold text-lg">هوش مصنوعی به بازار آمد</h2>
            <div className="more-details text-z-poor-content flex gap-1 justify-center text-sm">
              <div className="border-l-2 px-2 truncate max-w-40">
                <Link href={"/"} className="hover:link-content">محمد یوسفی</Link>
              </div>
              <div className="px-2">۱۴۰۳/۱۲/۳</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
