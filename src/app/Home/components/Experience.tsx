import { lexend, righteous } from "@/app/common/fonts";
// Components
import Image from "next/image";
// Images
import productBuilding from "../images/product.svg";

const Experience = () => {
  return (
    <section className="text-secondary max-md:p-4 pb-8">
      <h3 className={`mb-16 text-4xl  ${righteous.variable}`}>Experience</h3>
      <div className="grid grid-cols-2  items-start justify-items-center max-md:flex max-md:flex-col max-md:items-center">
        <div className="flex flex-col flex-wrap gap-4 mb-8">
          <p className={`text-xl ${lexend.variable}`}>
            I've built products for companies and businesses around the globe
            ranging from marketing websites to complex solutions and enterprise
            apps with focus on fast, elegant and accessible user experiences.
          </p>
          <p className={`text-xl ${lexend.variable}`}>
            Currently, I work at Shopify as a Senior Frontend Engineer crafting
            thoughtful and inclusive experiences that adhere to web standards
            for over 3 million merchants across the world.
          </p>
          <p className={`text-xl ${lexend.variable}`}>
            I once also led the frontend team at Conectar, an e-learning startup
            through building multiple React applications into a single robust
            learning platform.
          </p>
        </div>
        <Image
          src={productBuilding}
          alt="Processo de construção de software"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Experience;
