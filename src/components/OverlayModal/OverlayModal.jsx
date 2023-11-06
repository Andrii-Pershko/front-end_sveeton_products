import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Modal, Overlay } from './OverlayModal.styled';

const OverlayModal = ({ togleModal, children }) => {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      togleModal();
    }
  };

  const handleClickOverlay = e => {
    if (e.currentTarget === e.target) {
      togleModal(e);
    }
  };

  return createPortal(
    <Overlay onClick={handleClickOverlay}>
      <Modal>{children}</Modal>
    </Overlay>,
    modalRoot
  );
};
export default OverlayModal;
