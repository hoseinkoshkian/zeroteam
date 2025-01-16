"use client";
import Breadcrumb from "@components/Breadcrumb";
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumb />
      {children}
    </>
  );
}
