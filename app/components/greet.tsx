import { ReactElement } from "react";

export function Greet({ name }: { name: string }): ReactElement {
  console.log("Rendering Greet component");
  return <div>Hello, {name}!</div>;
}
