import { EmailVerification } from "@repo/ui/email-verification";
import { JSX } from "react";

export default function VerifyEmailPage(): JSX.Element {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <EmailVerification />
    </div>
  );
}
