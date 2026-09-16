import { useId, type InputHTMLAttributes } from 'react';
import { cn } from '@shared/lib';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  containerClassName?: string;
}

export function Input({ label, id, className, containerClassName, ...rest }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={cn('flex flex-col', containerClassName)}>
      <label htmlFor={inputId} className="text-xs mb-[5px] opacity-60">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          'w-full min-h-[42px] py-2 px-3.5 text-sm bg-blue-tint-2 border-0 rounded-sm transition-[box-shadow] duration-200 ease-[ease] placeholder:text-navy placeholder:opacity-40',
          className,
        )}
        {...rest}
      />
    </div>
  );
}
