import Image from "next/image"
import reqs from "./shenakht 2.svg"
import { cva , VariantProps } from "class-variance-authority"
import { ElProps } from "src/types/types"
import { ReactElement } from "react";

interface OrderItem extends VariantProps<typeof OrderItemStyles>, ElProps {
  title : string;
  text : string;
  number : number;
  dir : boolean;
}

const OrderItemStyles = cva(
  "",
  {
    variants: {
      intent: {
        reqs : reqs.src ,
      },
      defaultVariants: {
        intent: "bg-z-blue",
      },
    },
  }
);


export default function OrderItem(
  {intent,
  title,
  text,
  number,
  dir,
  extra,
  ...props} : OrderItem , 
 
) {
  // let content : ReactElement = dir ? 
  return (
    <div id="order-item-container" className={`relative  w-[80%] flex justify-center items-center  mx-auto`} {...props}>
      <div className=" absolute top-0 rounded-[50%] bg-white z-10  min-w-12 min-h-12 w-12 h-12 border-4 border-z-blue flex-grow  flex justify-center items-center  text-z-blue text-xl font-semibold">{number}</div>

     <div className="w-1/2">

      <div className="w-full flex justify-between items-center  relative ">

        <h5 className="bg-z-blue min-w-fit px-5 py-2 rounded-lg text-white flex-grow">{title}</h5>
        <hr className="h-[4px] w-full bg-z-blue border-none outline-none" />

      </div>

      

     <div className=" leading-loose text-justify w-full p-8 border-l-[4px] border-z-yellow  ">
      
     {text}
      
      </div>


     </div>
     <div className="w-1/2 px-4 py-2 ">
     <Image
     className="mx-auto "
       alt="zeroteam-logo"
       src={OrderItemStyles({intent})}
       height={150}
       width={150}
       ></Image>
       </div>
     
    </div>
  )
}
