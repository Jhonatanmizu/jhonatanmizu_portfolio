import { Button } from "@nextui-org/button";
// Fonts
import { righteous, lexend } from "../common/fonts";

const Main = () => {
  return (
    <main className="p-4 text-secondary   flex justify-between items-center  gap-8 max-lg:flex-col">
      <section className="flex flex-col gap-8">
        <h1 className={`text-4xl  ${righteous.variable}`}>
          Software Developer and UI/UX DESIGNER.
        </h1>
        <p className={`text-xl ${lexend.variable}`}>
          Lorem ipsum dolor sit amet consectetur. Lobortis lacus viverra
          facilisis molestie. Rhoncus placerat cras dolor vel suspendisse odio
          sit tempor donec.
        </p>
        <p className={`text-xl ${lexend.variable}`}>
          Lorem ipsum dolor sit amet consectetur. Lobortis lacus viverra
          facilisis molestie. Rhoncus placerat cras dolor vel suspendisse odio
          sit tempor donec.
        </p>
      </section>
      <Button className="h-64 w-64 rounded-full">Click me</Button>
    </main>
  );
};

export default Main;
