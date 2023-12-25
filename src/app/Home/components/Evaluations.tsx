import { Evaluation } from "@/app/common";
import { righteous } from "@/app/common/fonts";

const Evaluations = () => {
  return (
    <section
      className={` max-md:p-4 ${righteous.variable} text-secondary mb-16`}
    >
      <h3 className={`mb-16 text-4xl  ${righteous.variable}`}>Evaluations</h3>
      <div className="grid grid-cols-3 max-md:flex max-md:flex-col gap-4 ">
        <Evaluation />
        <Evaluation />
        <Evaluation />
        <Evaluation />
      </div>
    </section>
  );
};

export default Evaluations;
