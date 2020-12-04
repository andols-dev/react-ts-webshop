import React from "react";

type AppProps = { message: string };
export default function About({ message }: AppProps) {
  return <div>{message}</div>;
}
