import { Card } from "@/app/common";
import { righteous } from "@/app/common/fonts";

const Projects = () => {
  return (
    <section className="p-4 text-secondary pb-8">
      <h3 className={`mb-16 text-4xl  ${righteous.variable}`}>Projects</h3>
      <div className="grid gap-4 grid-cols-3 max-md:grid-cols-1">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Projects;
