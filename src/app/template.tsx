"use client";
import { usePathname } from "next/navigation";
import Breadcrumb from "@components/Breadcrumb";

export default function Template({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);
  const isRender = paths.some(Boolean);

  return (
    <>
      {isRender && <Breadcrumb />}
      {children}
    </>
  );
}
