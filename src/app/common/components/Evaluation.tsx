import Image from "next/image";
// Images
import clientPlaceholder from "@/app/common/images/clientPlaceholder.svg";
import star from "@/app/common/images/star.svg";
// Fonts
import { righteous } from "../fonts";

const STARS = Array.from({ length: 5 }, (_, i) => i + 1);

const Evaluation = () => {
  return (
    <div className="bg-secondary w-full rounded-2xl flex gap-4 items-center justify-between p-2 text-primary">
      <div className="flex flex-col gap-2 items-center justify-center">
        <Image
          src={clientPlaceholder}
          alt="Cliente"
          width={200}
          height={200}
          className="bg-purple rounded-full bg-slate-400"
        />
        <div className="flex items-center justify-center">
          {STARS.map((item, i) => (
            <Image src={star} alt="Estrela" width={16} height={16} key={i} />
          ))}
        </div>
      </div>
      <div className="flex gap-2 flex-col">
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur. Lobortis lacus viverra
          facilisis molestie.
        </p>
        <h6 className={`${righteous.variable} text-xl`}>Mary Silva</h6>
      </div>
    </div>
  );
};

export default Evaluation;
