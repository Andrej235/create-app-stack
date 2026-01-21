import { LoginForm } from "@repo/ui/login-form";
import { JSX } from "react";
import { useNavigate } from "react-router";
import { api } from "../../lib/api";
import { Link } from "../link";

export function LoginPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="grid h-screen w-screen place-items-center">
      <LoginForm
        className="w-[min(90vw,32rem)]"
        api={api}
        navigate={navigate}
        LinkComp={Link}
      />
    </div>
  );
}
