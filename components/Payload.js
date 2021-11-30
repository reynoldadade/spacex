import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWeightHanging,
  faTools,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import Dialog from "../components/UI/Dialog";
import { useState } from "react";
export default function Payloads({ payload }) {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-2  shadow-lg bg-gray-900 mr-2">
      <div className="text-2xl w-full ">
        <div className="flex justify-between">
          <span>{payload.id}</span>

          <button className="p-1">
            <FontAwesomeIcon icon={faInfoCircle} />
          </button>
        </div>
        <div className="text-xs">{payload.payload_type}</div>
      </div>
      <div className="p-1">
        <FontAwesomeIcon icon={faWeightHanging} />
        <span className="m-1">{payload.payload_mass_kg}</span>
      </div>
      <div className="p-1">
        <FontAwesomeIcon icon={faTools} />
        <span className="m-1">{payload.manufacturer}</span>
      </div>

      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
