import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled } from "./Modal.styled";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, children}) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
        return createPortal(
            <Overlay onClick={handleBackdropClick}>
                <ModalStyled>{children}</ModalStyled>
            </Overlay>,
            modalRoot,
        );

};

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Modal;

