// Components
import ContactButton from "@/app/common/components/ContactButton";
// Fonts
import { righteous } from "@/app/common/fonts";
// Images
import whatsappIcon from "@/app/common/images/whatsapp.svg";
import telegramIcon from "@/app/common/images/telegram.svg";
import linkedin from "@/app/common/images/linkedin.svg";
import github from "@/app/common/images/github.svg";

const Contact = () => {
  return (
    <section className="p-4 bg-secondary text-primary rounded-2xl mb-16  w-full">
      <h3 className={`mb-8 text-4xl  ${righteous.variable}`}>Contact</h3>
      <div className="grid grid-cols-2 gap-4 max-md:flex max-md:flex-col">
        <ContactButton title="Whatsapp" imageUrl={whatsappIcon} link="" />
        <ContactButton title="Telegram" imageUrl={telegramIcon} link="" />
        <ContactButton title="Linkedin" imageUrl={linkedin} link="" />
        <ContactButton
          title="Github"
          imageUrl={github}
          link="https://github.com/Jhonatanmizu"
        />
      </div>
    </section>
  );
};

export default Contact;
