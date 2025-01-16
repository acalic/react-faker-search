import React, { useRef } from 'react';
import './Modal.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? 'is-open' : ''}`} ref={modalRef} onClick={handleOverlayClick} role="dialog">
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
