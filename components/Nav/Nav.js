import React from "react";
import Link from "next/dist/client/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex flex-row w-full h-[10%] px-12 justify-between items-center">
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className="flex flex-row gap-10 ">
        <Link href="/shop">
          <a>Shop</a>
        </Link>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
        <Link href="/cart">
          <a>Cart</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
