import { Dialog } from "@headlessui/react";
import React from "react";
export default function PayloadDetails({ payload, setIsOpen }) {
  return (
    <div className="relative bg-gray-900 rounded w-1/2 mx-auto p-4 shadow-lg">
      <Dialog.Title className="text-2xl py-2">{payload.id}</Dialog.Title>

      <div>
        <div className="p-1">
          <div className="text-xs uppercase">country</div>
          <div className="p-1">{payload.nationality}</div>
        </div>
        <div className="p-1">
          <div className="text-xs uppercase">Mass</div>
          <div className="p-1">
            {payload.payload_mass_kg ? payload.payload_mass_kg : "-"} kg /{" "}
            {payload.payload_mass_lbs ? payload.payload_mass_lbs : "-"} lbs
          </div>
        </div>
        <div className="p-1">
          <div className="text-xs uppercase">type</div>
          <div className="p-1">{payload.payload_type}</div>
        </div>
        <div className="p-1">
          <div className="text-xs uppercase">manufacturer</div>
          <div className="p-1">{payload.manufacturer}</div>
        </div>
        <div className="p-1">
          <div className="text-xs uppercase">Satellite Catalog Number(s)</div>
          <div>
            {payload.norad_id.map((id) => (
              <span key={id} className="px-1">
                {id}
              </span>
            ))}
          </div>
        </div>
        <div className="p-1">
          <div className="text-xs uppercase">customers</div>
          <div>
            {payload.customers.map((customer) => (
              <span key={customer} className="px-1">
                {customer}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(false)}
        className="p-1 my-1 rounded bg-white text-black hover:bg-gray-700 hover:text-white"
      >
        Close
      </button>
    </div>
  );
}
