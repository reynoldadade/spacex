import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";

//get payload
const GET_PAYLOAD = gql`
  query GET_PAYLOAD($id: ID!) {
    payload(id: $id) {
      customers
      manufacturer
      nationality
      orbit
      payload_mass_kg
      payload_mass_lbs
      payload_type
      norad_id
      reused
      id
    }
  }
`;
export default function MyDialog({ isOpen, setIsOpen, id }) {
  //get payload data
  const { loading, error, data } = useQuery(GET_PAYLOAD, {
    variables: { id },
  });

  const { payload } = data;

  return (
    <Transition show={isOpen} as={Fragment} appear>
      <Dialog
        onClose={() => setIsOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as={Fragment}
            enter=" duration-300 transition-opacity"
            enterFrom="opacity-0"
            leave="ease-in duration-300 transition-opacity"
            leaveFrom="opacity-70"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500 transition transform"
            enterFrom="opacity-0 scale-95 translate-x-5"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-500 transition transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95 translate-x-5"
          >
            <div className="relative bg-gray-900 rounded w-1/2 mx-auto p-4 shadow-lg">
              <Dialog.Title className="text-2xl py-2">
                {payload.id}
              </Dialog.Title>

              <div>
                <div className="p-1">
                  <div className="text-xs uppercase">country</div>
                  <div className="p-1">{payload.nationality}</div>
                </div>
                <div className="p-1">
                  <div className="text-xs uppercase">Mass</div>
                  <div className="p-1">
                    {payload.payload_mass_kg ? payload.payload_mass_kg : "-"} kg
                    /{" "}
                    {payload.payload_mass_lbs ? payload.payload_mass_lbs : "-"}{" "}
                    lbs
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
                  <div className="text-xs uppercase">
                    Satellite Catalog Number(s)
                  </div>
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
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
