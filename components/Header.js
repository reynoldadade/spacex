import Link from "next/link";

export default function Header() {
  const links = [
    { name: "Missions", path: "/missions" },
    { name: "Launches", path: "/launches" },
    { name: "Landing Pads", path: "/launch-pads" },
    { name: "Rockets", path: "/rockets" },
    { name: "Dragons", path: "/dragons" },
  ];
  return (
    <div className="w-full p-4 flex sticky top-0 bg-black z-30">
      <div className="p-2 font-semibold text-lg">
        <span>SpaceXMissions</span>
      </div>
      <ul className="flex justify-around flex-grow">
        {links.map((link) => (
          <li key={link.name} className="hover:text-gray-700 p-3">
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
