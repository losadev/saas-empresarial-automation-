/*Both layout.tsx and page.tsx will be rendered when the user visits the root of your application (/).*/
import type { ReactNode } from "react";
import "../app/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
