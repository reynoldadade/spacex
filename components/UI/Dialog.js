import { Dialog } from "@headlessui/react";

export default function MyDialog({ isOpen, setIsOpen }) {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Overlay />

      <Dialog.Title>Deactivate account</Dialog.Title>
      <Dialog.Description>
        This will permanently deactivate your account
      </Dialog.Description>

      <p>
        Are you sure you want to deactivate your account? All of your data will
        be permanently removed. This action cannot be undone.
      </p>

      <button onClick={() => setIsOpen(false)}>Deactivate</button>
      <button onClick={() => setIsOpen(false)}>Cancel</button>
    </Dialog>
  );
}
