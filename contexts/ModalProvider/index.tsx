import Image from 'next/image';
import React, { ReactNode, createContext, useContext, useRef, useState } from 'react';
// Criar um contexto
export const ModalContext = createContext({
  openModal: (url : string) => {},
  closeModal: () => {}
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState({ url: '', isOpen: false });
  const ref = useRef<any>()

  const openModal = (url: string) => {
    setModal({ url: url, isOpen: true });
  };

  const closeModal = () => {
    setModal({ url: '', isOpen: false });
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {modal.isOpen && (
        <div className="modal">
          <button type='button' className="modal-button" onClick={closeModal}>
            X
          </button>
          <div className='modal-img'>
            <Image
              ref={ref}
              src={modal.url}
              width={500}
              height={500}
              alt="ModalImg"
              className="w-auto h-auto"
            />
          </div>

        </div>
      )}
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal deve ser usado dentro de um ModalProvider');
  }
  return context;
}
