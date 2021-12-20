import ReactPlayer from "react-player";

export default function LaunchDetails({ launch }) {
  return (
    <div className="w-full p-10">
      <div className="p-2">{launch.mission_name}</div>
      <div className="w-full p-2 grid grid-cols-2">
        <ReactPlayer url={launch.links.video_link} />
        <div>{launch.details ? launch.details : "No details found"}</div>
      </div>
    </div>
  );
}
