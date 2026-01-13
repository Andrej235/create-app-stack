import { SignupForm } from "@repo/ui/signup-form";
import { JSX } from "react";

export default function RegisterPage(): JSX.Element {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <SignupForm className="w-lg" />
    </div>
  );
}
