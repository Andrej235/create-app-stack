import { LoginForm } from "@repo/ui/login-form";
import { JSX } from "react";

export default function LoginPage(): JSX.Element {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <LoginForm className="w-lg" />
    </div>
  );
}
