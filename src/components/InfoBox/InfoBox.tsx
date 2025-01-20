import { Icon } from "@iconify/react/dist/iconify.js";
type InfoBoxProps = {
  text: string;
};
export default function InfoBox({ text }: InfoBoxProps) {
  return (
    <div
      id="info-box"
      className="container flex gap-2 items-center bg-[#EEEE] px-6 py-8 border-b-4 border-b-z-blue"
    >
      <Icon
        icon={"ph:map-pin-area-duotone"}
        width={36}
        height={36}
        className="text-z-blue"
      ></Icon>
      <h3 className="font-semibold">{text}</h3>
    </div>
  );
}
