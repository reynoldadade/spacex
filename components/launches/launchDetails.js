import ReactPlayer from "react-player";
//import icons from font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";
import moment from "moment";

export default function LaunchDetails({ launch }) {
  return (
    <div className="w-full p-10">
      <div className="p-2">{launch.mission_name}</div>
      <div className="w-full p-2 grid grid-cols-2">
        <ReactPlayer url={launch.links.video_link} />
        <div>
          <div className="p-2 space-x-4">
            <span className="bg-gray-900 shadow rounded p-2">
              {moment(launch.launch_date_utc).format("MMMM Do YYYY, h:mm:ss a")}
            </span>
            <a
              href={launch.links.article_link}
              target={"_blank"}
              rel="noreferrer"
              className="bg-gray-900 shadow rounded p-2"
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
            <a
              href={launch.links.wikipedia}
              target={"_blank"}
              rel="noreferrer"
              className="bg-gray-900 shadow rounded p-2"
            >
              <FontAwesomeIcon icon={faWikipediaW} />
            </a>
          </div>
          <div className="p-2">
            {launch.details ? launch.details : "No details found"}
          </div>
        </div>
      </div>
    </div>
  );
}
