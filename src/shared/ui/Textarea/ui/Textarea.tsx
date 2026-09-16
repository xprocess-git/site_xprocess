import { useId, type TextareaHTMLAttributes } from 'react';
import { cn } from '@shared/lib';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  containerClassName?: string;
}

export function Textarea({ label, id, className, containerClassName, ...rest }: TextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;

  return (
    <div className={cn('flex flex-col', containerClassName)}>
      <label htmlFor={textareaId} className="text-xs mb-[5px] opacity-60">
        {label}
      </label>
      <textarea
        id={textareaId}
        className={cn(
          'w-full min-h-20 py-2.5 px-3.5 text-sm bg-blue-tint-2 border-0 rounded-sm resize-y transition-[box-shadow] duration-200 ease-[ease] placeholder:text-navy placeholder:opacity-40',
          className,
        )}
        {...rest}
      />
    </div>
  );
}
