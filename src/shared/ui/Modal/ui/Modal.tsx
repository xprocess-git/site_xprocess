import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useFocusTrap, useLockBodyScroll } from '@shared/hooks';
import { cn } from '@shared/lib';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  labelledBy?: string;
  describedBy?: string;
  className?: string;
}

export function Modal({ isOpen, onClose, children, labelledBy, describedBy, className }: ModalProps) {
  useLockBodyScroll(isOpen);
  const containerRef = useFocusTrap(isOpen, onClose);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={cn(
        'fixed inset-0 z-[100] grid place-items-center p-6 bg-navy-overlay-55',
        'animate-fade-in-modal motion-reduce:animate-none',
      )}
      onClick={onClose}
    >
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        className={cn(
          'relative w-[min(460px,100%)] max-h-[90vh] overflow-auto bg-card rounded-lg shadow-md',
          'animate-rise-in-modal motion-reduce:animate-none',
          className,
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}
