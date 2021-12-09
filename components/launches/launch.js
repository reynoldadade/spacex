import Link from "next/link";
import moment from "moment";

export default function Launch({ launch }) {
  return (
    <div className="w-full p-4 bg-gray-900 rounded shadow-lg">
      <div className="font-semibold text-2xl p-2 ">{launch.mission_name} </div>
      <div className="text-sm text-gray-400 p-2">
        {moment(launch.launch_date_utc).format("MMMM Do YYYY, h:mm:ss a")}
      </div>
      <div className="p-2 w-full">
        {launch.details ? launch.details : "No details found"}
      </div>
      <div className="p-2">
        <span className="border p-2">
          <Link href={`launches/${launch.id}`}>Read More</Link>
        </span>
      </div>
    </div>
  );
}
