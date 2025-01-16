"use client";
import Breadcrumb from "@components/Breadcrumb";
import { useSearchParams } from "next/navigation";
// export function generateStaticParams() {
//   return {
//     name: "خانه",
//   };
// }
export default function AboutUs(param: string) {
  // const
  const searchParams = useSearchParams();
  console.log(searchParams);
  return (
    <>
      <div className="container mx-auto">سیب</div>
    </>
  );
}
