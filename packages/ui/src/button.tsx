"use client";

import { cn } from "@repo/utils/cn";

export const Button = ({ className }: { className?: string }) => {
  return (
    <button
      onClick={() => alert(`Hello from your app!`)}
      className={cn("px-4 py-2 bg-blue-500 text-white rounded-md", className)}
    >
      Click me
    </button>
  );
};
