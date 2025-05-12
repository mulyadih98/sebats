import React from "react";

type ModalProps = {
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ onClose, title = "Modal", children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <div>{children}</div>
        <button className='bg-red-600 text-gray-200 p-1.5 rounded-sm' onClick={onClose}>Tutup</button>
      </div>
    </div>
  );
};

export default Modal;