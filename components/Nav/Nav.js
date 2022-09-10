import React from "react";
import Link from "next/dist/client/link";

const Nav = () => {
  return (
    <nav className="flex flex-row w-full h-[7%] px-4 justify-between items-center font-RobotoMono">
      <div className=" flex w-1/3">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <form
        onSubmit={() => {}}
        className="flex flex-row h-full w-1/3 justify-center items-center"
      >
        <input className=" flex h-8 w-[20rem] border border-gray-600 rounded rounded-r-none bg-white" />
        <button className=" flex h-8 w-[4rem] border border-gray-600 border-l-0 bg-slate-600 text-white rounded rounded-l-none shadow-md justify-center items-center">
          Search
        </button>
      </form>
      <div className="flex flex-row gap-10 h-full w-1/3 justify-end items-center">
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
