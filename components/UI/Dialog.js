import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";
import PayloadDetails from "./PayloadDetails";
import React from "react";
const ref = React.createRef();

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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { payload } = data;

  return (
    <Transition show={isOpen} as={Fragment}>
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
            className="w-full"
            // as={div}
            enter="ease-out duration-500 transition transform"
            enterFrom="opacity-0 scale-95 translate-x-5"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-500 transition transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95 translate-x-5"
          >
            <PayloadDetails payload={payload} setIsOpen={setIsOpen} />
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
