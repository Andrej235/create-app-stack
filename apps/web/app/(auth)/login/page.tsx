import { LoginForm } from "@repo/ui/login-form";
import { JSX } from "react";
import { api } from "../../../lib/api.client";

export default function LoginPage(): JSX.Element {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <LoginForm className="w-lg" api={api} />
    </div>
  );
}
