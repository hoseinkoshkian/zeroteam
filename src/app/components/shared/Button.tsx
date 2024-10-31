type Props = {
  val: string;
  bg: string;
};
export default function Button({ val, bg }: Props) {
  return (
    <button className={`px-5 py-2 bg-z-${bg} text-white rounded-lg`}>
      {val}
    </button>
  );
}
