import { useId, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@shared/lib';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode;
}

export function Checkbox({ label, id, className, ...rest }: CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  return (
    <label
      htmlFor={checkboxId}
      className={cn('flex items-start gap-2 text-xs opacity-75 cursor-pointer', className)}
    >
      <input
        id={checkboxId}
        type="checkbox"
        className="mt-0.5 size-4 flex-none cursor-pointer accent-orange"
        {...rest}
      />
      <span className="leading-normal">{label}</span>
    </label>
  );
}
