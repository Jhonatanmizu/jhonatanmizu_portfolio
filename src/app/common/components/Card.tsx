// Components
import Image from "next/image";
// Fonts
import { righteous } from "../fonts";

interface Props {
  title: string;
  text: string;
  photo: string;
}

const Card = ({ title = "Title", text = "text", photo }: Props) => {
  return (
    <div className="bg-secondary p-4 flex flex-col gap-2 rounded-3xl text-primary w-full">
      <Image src="" alt={title} className="w-full h-64 bg-primary rounded-xl" />
      <h4 className={`text-2xl ${righteous.variable}`}>{title}</h4>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur. Lobortis lacus viverra facilisis
        molestie. Rhoncus placerat cras dolor vel suspendisse odio sit tempor
        donec.
      </p>
    </div>
  );
};

export default Card;
