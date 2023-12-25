import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-screen-xl m-auto bg-primary min-h-full">
      {children}
    </div>
  );
};

export default Container;
