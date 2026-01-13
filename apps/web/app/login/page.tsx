import { LoginForm } from "@repo/ui/login-form";
import { JSX } from "react";

export default function Page(): JSX.Element {
  return (
    <div className="h-screen w-screen grid place-items-center">
      <LoginForm className="w-lg" />
    </div>
  );
}
