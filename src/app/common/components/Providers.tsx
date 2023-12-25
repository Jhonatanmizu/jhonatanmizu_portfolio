"use client";
import { NextUIProvider } from "@nextui-org/react";
// Types
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const Providers = ({ children }: Props) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
