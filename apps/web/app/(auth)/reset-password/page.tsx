import { ResetPassword } from "@repo/ui/reset-password";
import { JSX } from "react";
import { api } from "../../../lib/api.client";

export default function ResetPasswordPage(): JSX.Element {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <ResetPassword api={api} />
    </div>
  );
}
