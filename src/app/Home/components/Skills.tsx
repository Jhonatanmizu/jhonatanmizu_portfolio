// Fonts
import { righteous } from "@/app/common/fonts";

const Skills = () => {
  return (
    <section className="bg-secondary text-primary p-4 rounded-2xl mb-16 flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <h2 className={`text-4xl  ${righteous.variable}`}>Design</h2>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur. Lobortis lacus viverra
          facilisis molestie. Rhoncus placerat cras dolor vel suspendisse odio
          sit tempor donec.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className={`text-4xl  ${righteous.variable}`}>Engineering</h2>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur. Lobortis lacus viverra
          facilisis molestie. Rhoncus placerat cras dolor vel suspendisse odio
          sit tempor donec.
        </p>
      </div>
    </section>
  );
};

export default Skills;
