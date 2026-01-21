"use client";
import { EmailVerification } from "@repo/ui/email-verification";
import { useRouter } from "next/navigation";
import { JSX } from "react";
import { api } from "../../../lib/api.client";

export default function VerifyEmailPage(): JSX.Element {
  const router = useRouter();

  return (
    <div className="grid h-screen w-screen place-items-center">
      <EmailVerification api={api} navigate={router.push} />
    </div>
  );
}
