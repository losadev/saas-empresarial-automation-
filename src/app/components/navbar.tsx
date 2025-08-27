"use client";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  // useSession nos de infor del login
  const { data: session } = useSession();
  console.log(session);
  return (
    <nav className="flex gap-24 bg-slate-900 text-white px-24">
      <Link href={"/dasboard"}>Home</Link>
      {session?.user ? (
        <div>
          <Link className="py-8" href={"/dashboard"}>
            Dashboard
          </Link>
          <p>{session.user.email} </p>
          <button
            onClick={async () => {
              await signOut({
                callbackUrl: "/",
              });
            }}
          >
            Log out
          </button>
        </div>
      ) : (
        <button className="py-8 bg-amber-500" onClick={() => signIn()}>
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
