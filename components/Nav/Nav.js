import React from "react";
import Link from "next/dist/client/link";

const Nav = () => {
  return (
    <nav className="flex flex-row w-full bg-black text-white">
      <div className="flex flex-row w-full gap-4">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/cats">
          <a>Cats</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
