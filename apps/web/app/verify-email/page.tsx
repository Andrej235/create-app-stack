import { EmailVerification } from "@repo/ui/email-verification";
import { JSX, Suspense } from "react";

export default function VerifyEmailPage(): JSX.Element {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <Suspense fallback={null}>
        <EmailVerification />
      </Suspense>
    </div>
  );
}
