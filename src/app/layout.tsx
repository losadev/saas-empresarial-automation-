/*Both layout.tsx and page.tsx will be rendered when the user visits the root of your application (/).*/
import type { ReactNode } from "react";
import "../app/globals.css";
import Navbar from "./components/navbar";
import { Providers } from "./Providers";
import PrismaClient from "@prisma/client";
export default function RootLayout({ children }: { children: ReactNode }) {
  const prisma = new PrismaClient();

  async function main() {
    //change to reference a table in your schema
    const val = await prisma.User.findMany({
      take: 10,
    });
    console.log(val);
  }

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar></Navbar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
