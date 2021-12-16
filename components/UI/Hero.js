import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const moonRef = useRef();
  const sateliteRef = useRef();
  useEffect(() => {
    gsap.to(moonRef.current, {
      duration: 15,
      //   repeat: -1,
      ease: "linear",
      left: "100%",
      top: "100%",
      opacity: 100,
    });
  });

  useEffect(() => {
    gsap.to(sateliteRef.current, {
      duration: 15,
      //   repeat: -1,
      ease: "linear",
      bottom: "100%",
      right: "100%",
      rotate: "180deg",
    });
  });
  return (
    <div className="w-full bg-viasat h-screen bg-cover grid grid-cols-2 relative">
      <div
        className="overflow-hidden w-32 h-32  absolute top-0 left-0 opacity-0"
        ref={moonRef}
      >
        <Image
          src={"/moon.png"}
          alt="fullmoon from 2010"
          layout="fill"
          quality={100}
        />
      </div>
      <div
        className="overflow-hidden w-32 h-32  absolute bottom-0 right-0"
        ref={sateliteRef}
      >
        <Image
          src={"/satelite.png"}
          alt="fullmoon from 2010"
          layout="fill"
          quality={100}
        />
      </div>

      <div className="col-span-1 p-4 flex justify-center  flex-col z-20">
        <p className="text-5xl font-bold p-2">SpaceX Missions</p>

        <p className="p-2">
          After 6 years in web development i decided to challenge myself with
          technologies i knew about but never went round to completely
          mastering. After taking 4 years to master Angular, 2 years to master
          Vue.js, I am ending my triumvate with React.js. I wil be using
          TailwindCSS, react.js, HeadlessUI and GSAP.js to build this site.
        </p>
        <div className="py-4 px-2">
          <button className="rounded p-2 bg-white text-black">
            Check out the repo
          </button>
        </div>
      </div>
    </div>
  );
}
