// Components
import Image from "next/image";
import Link from "next/link";
// Fonts
import { righteous } from "../fonts";

interface Props {
  link: string;
  imageUrl: string;
  title: string;
}

const ContactButton = ({ link, imageUrl, title }: Props) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="bg-primary text-secondary flex items-center justify-start gap-4 rounded-2xl p-4 hover:opacity-75"
    >
      <Image src={imageUrl} alt="whatsapp" height={24} width={24} />
      <span className={`${righteous.variable} text-lg`}>{title}</span>
    </Link>
  );
};

export default ContactButton;
