import Link from "next/link";

export default function Header() {
  const links = [
    { name: "Missions", path: "/missions" },
    { name: "Launch Pads", path: "/launch-pads" },
    { name: "Landing Pads", path: "/launch-pads" },
    { name: "Rockets", path: "/rockets" },
    { name: "Dragons", path: "/dragons" },
  ];
  return (
    <div className="w-full p-4 flex">
      <div className="p-2 font-semibold text-lg">
        <span>SpaceXMissions</span>
      </div>
      <div className="flex justify-around flex-grow">
        {links.map((link) => (
          <div key={link.name} className="hover:text-gray-700 p-3">
            <Link href={link.path}>{link.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
