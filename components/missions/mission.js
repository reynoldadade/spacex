import Link from "next/link";
export default function mission({ mission }) {
  return (
    <div className="w-full p-4 shadow-lg bg-gray-900 rounded">
      <div className="font-semibold text-2xl p-2 ">{mission.name}</div>
      <div className="p-2 w-full">{mission.description}</div>
      <div className="p-2">
        <span className="border p-2">
          <Link href={`missions/${mission.id}`}>Read More</Link>
        </span>
      </div>
    </div>
  );
}
