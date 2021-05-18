import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps): JSX.Element => {
  return (
    <>
      <div
        className={`Modal -backdrop ${isOpen ? 'Menu -backdrop--open' : 'Menu -backdrop--closed'}`}
        onClick={onClose}></div>
      <div className={`Modal -body ${isOpen ? '-body--open' : '-body--closed'}`}>{children}</div>
    </>
  );
};

export default Modal;
