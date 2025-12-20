import { Button } from "@repo/ui/common/button";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div>
      <div className="grid h-12 w-full place-self-center bg-amber-300 text-black">
        <div className="max-w-max">Hello World!</div>
      </div>

      <Button>Click me!</Button>
    </div>
  );
}
