import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function MyDialog({ isOpen, setIsOpen }) {
  return (
    <Transition show={isOpen} as={Fragment} appear>
      <Dialog
        onClose={() => setIsOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative bg-gray-900 rounded w-1/2 mx-auto p-4 shadow-lg">
              <Dialog.Title className="text-2xl py-2">
                Payload Information
              </Dialog.Title>

              <p>
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed. This action cannot be undone.
              </p>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded bg-white text-black"
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
