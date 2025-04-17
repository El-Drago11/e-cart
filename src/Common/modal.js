'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import '../app/globals.css';

export function Modal({ children }) {
  const router = useRouter();
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="modal-backdrop fixed inset-0 bg-black/55 flex justify-center items-center z-50">
      <dialog ref={dialogRef} className="modal mx-auto h-[30rem] w-11/12 lg:w-1/2 mt-[10rem] transition-all duration-300 ease-in-out rounded-2xl bg-slate-100 px-1 md:px-6 py-10" onClose={onDismiss}>
        {children}
        <button onClick={onDismiss} className="close-button" />
      </dialog>
    </div>,
    document.getElementById('modal-root')
  );
}
