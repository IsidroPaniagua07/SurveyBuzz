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
        <h1 className="flex h-1/3 w-full italic  justify-center items-center text-5xl font-bold">
          Survey Buzz.
        </h1>
        <div className="w-full h-1/3 flex items-center justify-between px-2 font-RobotoMono  bg-slate-800 text-white">
          <div className="flex flex-col h-full w-full justify-center items-center gap-10">
            <span className="text-2xl">
              Create anonymous surveys to share and view the results later.
            </span>
            <Link href="/survey">
              <button className="flex h-fit bg-black font-bold text-xl text-white rounded-md justify-self-center py-4 px-10">
                Create
              </button>
            </Link>
          </div>
        </div>
        <div className=" flex items-center w-full h-1/3 text-white text-left font-Roboto text-xl mb-14">
          <div className="flex flex-col h-full w-full text-xl justify-center items-center text-black gap-10">
            <span>Looking for a survey?</span>
            <Link href="/survey">
              <button className="flex h-fit bg-black font-bold text-xl text-white rounded-md justify-self-center py-4 px-10">
                Search
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
