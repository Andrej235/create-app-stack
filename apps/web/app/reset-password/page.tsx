import { ResetPassword } from "@repo/ui/reset-password";
import { JSX } from "react";

export default function ResetPasswordPage(): JSX.Element {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <ResetPassword />
    </div>
  );
}
