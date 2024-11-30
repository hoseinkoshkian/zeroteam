// import React from 'react'
import OrderItem, { ButtonVariantProps } from "./OrderItem";
import { ElProps } from "src/types/types";
interface PathsTypes extends ElProps {
  text: string;
  title: string;
  img: ButtonVariantProps["img"];
  number: number;
  dir: boolean;
}
export default function Paths({
  text,
  title,
  img,
  number,
  dir,
  extra,
}: Required<PathsTypes>) {
  return (
    <div className={`${extra}`}>
      <OrderItem
        text="مهم ترین مرحله هر نرم افزار یا محصول تولید شده به قسمت نگهداری maintain اون برمیگرده که در مجموعه برنامه نویسی zeroteam سعی شده بیشترین سرمایه در این قسمت صرف شود .."
        title="پشتیبانی و آموزش"
        img={"support"}
        number={1}
        dir={true}
      />
      <OrderItem
        text="مهم ترین مرحله هر نرم افزار یا محصول تولید شده به قسمت نگهداری maintain اون برمیگرده که در مجموعه برنامه نویسی zeroteam سعی شده بیشترین سرمایه در این قسمت صرف شود .."
        title="پشتیبانی و آموزش"
        img={"support"}
        number={2}
        dir={false}
      />
      <OrderItem
        text="مهم ترین مرحله هر نرم افزار یا محصول تولید شده به قسمت نگهداری maintain اون برمیگرده که در مجموعه برنامه نویسی zeroteam سعی شده بیشترین سرمایه در این قسمت صرف شود .."
        title="پشتیبانی و آموزش"
        img={"support"}
        number={3}
        dir={true}
      />
      <OrderItem
        text="مهم ترین مرحله هر نرم افزار یا محصول تولید شده به قسمت نگهداری maintain اون برمیگرده که در مجموعه برنامه نویسی zeroteam سعی شده بیشترین سرمایه در این قسمت صرف شود .."
        title="پشتیبانی و آموزش"
        img={"support"}
        number={4}
        dir={false}
      />
    </div>
  );
}
