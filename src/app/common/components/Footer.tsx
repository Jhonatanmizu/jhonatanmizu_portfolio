// Fonts
import { righteous } from "../fonts";

const Footer = () => {
  return (
    <footer className="w-full flex items-center bg-secondary h-16 text-primary justify-center">
      <h6 className={`${righteous.variable} text-xl`}>
        Developed with love by Jhonatanmizu
      </h6>
    </footer>
  );
};

export default Footer;
