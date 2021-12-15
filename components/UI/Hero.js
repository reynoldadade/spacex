export default function Hero() {
  return (
    <div className="w-full bg-viasat h-screen bg-cover grid grid-cols-2">
      <div className="col-span-1 p-4 flex justify-center  flex-col">
        <p className="text-5xl font-bold p-2">SpaceX Missions</p>

        <p className="p-2">
          After 6 years in web development i decided to challenge myself with
          technologies i knew about but never went round to completely mastering
          After taking 4 years to master Angular, 2 years to master Vue.js, I am
          ending my triumvate with React.js. I wil be using TailwindCSS,
          react.js, HeadlessUI and GSAP.js to build this site.
        </p>
        <div className="py-4 px-2">
          <button className="rounded p-2 bg-white text-black">
            Take a journey with Me
          </button>
        </div>
      </div>
    </div>
  );
}
