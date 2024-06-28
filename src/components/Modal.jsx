import React from 'react';
const Modal = ({ show, onClose, children }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-700">
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;