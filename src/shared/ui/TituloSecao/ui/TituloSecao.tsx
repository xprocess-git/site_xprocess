import { cn } from '@shared/lib';

export interface TituloSecaoProps {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
}

export function TituloSecao({
  eyebrow,
  title,
  titleId,
  description,
  className,
  titleClassName,
}: TituloSecaoProps) {
  return (
    <div className={cn('max-w-[560px] mb-12', className)}>
      {eyebrow ? (
        <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.08em] text-orange">
          {eyebrow}
        </span>
      ) : null}
      <h2 id={titleId} className={cn('mb-3.5 text-[34px]', titleClassName)}>
        {title}
      </h2>
      {description ? <p className="m-0 text-base leading-[1.6] opacity-70">{description}</p> : null}
    </div>
  );
}
