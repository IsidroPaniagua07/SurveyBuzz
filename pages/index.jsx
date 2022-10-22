import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/dist/client/link";
export default function Home() {
  if (typeof window !== "undefined") {
  }

  return (
    <>
      <div className="h-full w-full flex flex-col items-center">
        <div className="w-full h-1/2 flex items-center justify-between px-2 font-RobotoMono font-bold text-5xl">
          <h1 className="flex h-fit w-1/2 italic text-black justify-start items-center ">
            Survey Buzz.
          </h1>
          <div className="flex h-full w-full justify-center items-center">
            <Link href='/create'>
            <button
              className="flex h-fit bg-black font-bold text-xl text-white rounded-md justify-self-center py-4 px-10"
              >
              Start
            </button>
              </Link>
          </div>
        </div>
        <div className=" flex pl-40 items-center w-full h-1/3 bg-slate-800 text-white text-left font-Roboto text-xl mb-14">
          <div className="flex flex-col h-fit text-xl w-fit p-2">
            <span className="text-3xl">Hello!</span>
            <span>
              You can create anonymous surveys to share and view the results
              later.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
