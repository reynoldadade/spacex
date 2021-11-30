import Payload from "../Payload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MissionDetails({ mission }) {
  return (
    <div className="w-full">
      <h1 className="text-6xl font-bold">{mission.name}</h1>
      <div className="grid grid-cols-4 gap-10 p-4">
        <div className="col-span-2 ">
          <p>{mission.description}</p>
          <div className="w-full flex">
            <div className="flex">
              <a href={mission.twitter}>
                {/* <FontAwesomeIcon icon={["fab", "twitter"]} /> */}
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <h1 className="font-semibold text-4xl">Payload</h1>
          <div className="flex flex-wrap  w-full py-4">
            {mission.payloads.map((payload) => (
              <div key={payload.id} className="w-1/2">
                <Payload payload={payload} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
