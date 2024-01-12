"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children, attribute }: { children: React.ReactNode, attribute: string }) {
  return <ThemeProvider attribute={attribute}>{children}</ThemeProvider>;
}
