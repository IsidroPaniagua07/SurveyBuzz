import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="w-full h-1/2 flex items-center justify-between font-RobotoMono font-bold text-5xl">
        <h1 className="flex h-fit w-fit italic text-black justify-center items-center p-2">
          Caudill&apos;s Crafts.
        </h1>
        <div>
          test
        </div>
      </div>
      <div className=" flex pl-40 items-center w-full h-1/3 bg-slate-800 text-white text-left font-Roboto text-xl mb-14">
        <div className="flex flex-col h-fit text-xl w-fit p-2">
          <span className="text-3xl">
            Hello!
          </span>
          <span>
            We&apos;re a family run Disney-inspired apparel shop in San Diego, CA 
          </span>
          <span>
            Our mission is to add a little bit of magic into your every-day wardrobe.
          </span>
          Our apparel is 100% Handmade with love and magic for women, men and children.
          <span>
             Feel free to take a look, browse, and reach out with any questions!
          </span>
        </div>
      </div>
    </div>
  );
}
