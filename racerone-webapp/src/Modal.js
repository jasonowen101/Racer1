import React from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div>
      <div>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
