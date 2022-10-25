import React from "react";
import Link from "next/dist/client/link";

const Nav = () => {
  return (
    <nav className="flex flex-row w-full h-[7%] px-6 justify-between items-center font-RobotoMono">
      <div className=" flex w-1/3">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <form
        onSubmit={() => {}}
        className="flex flex-row h-full w-1/3 justify-center items-center"
      >

      </form>
      <div className="flex flex-row gap-10 h-full w-1/3 justify-end items-center">
        <Link href="/survey">
          <a>Create</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
