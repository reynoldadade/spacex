import Link from "next/link";

export default function Header() {
  const links = [
    { name: "Missions", path: "/missions" },
    { name: "Launch Pad", path: "/launch-pads" },
    { name: "About", path: "/about" },
  ];
  return (
    <div className="w-full p-4 flex">
      <div className="p-2 font-semibold text-lg">
        <span>SpaceXMissions</span>
      </div>
      <div className="flex justify-around w-1/2">
        {links.map((link) => (
          <div key={link.name} className="hover:text-gray-400 p-3">
            <Link href={link.path}>{link.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
