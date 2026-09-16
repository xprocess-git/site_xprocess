import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn, omitKeys } from '@shared/lib';

export type ButtonVariant = 'primary' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type ButtonAsButtonProps = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps> & {
    as?: 'button';
  };

type ButtonAsAnchorProps = ButtonOwnProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonOwnProps> & {
    as: 'a';
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const OWN_PROP_KEYS = ['as', 'variant', 'size', 'className', 'children'] as const;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'text-white bg-orange rounded-md shadow-sm hover:bg-orange-dark active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:scale-100',
  link: 'text-orange bg-transparent p-0 hover:text-orange-dark active:translate-x-0.5',
};

const sizeClasses: Record<ButtonVariant, Record<ButtonSize, string>> = {
  primary: {
    sm: 'px-[22px] py-3 text-[13px] tracking-[0.02em]',
    md: 'px-[26px] py-3.5 text-sm',
    lg: 'px-8 py-4 text-[15px]',
  },
  link: {
    sm: 'text-[13px]',
    md: 'text-sm',
    lg: 'text-[15px]',
  },
};

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = cn(
    'inline-flex items-center justify-center gap-1.5 cursor-pointer font-heading font-semibold border-0 no-underline select-none transition duration-200',
    variantClasses[variant],
    sizeClasses[variant][size],
    className,
  );

  if (props.as === 'a') {
    const anchorProps = omitKeys(props, OWN_PROP_KEYS);
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = omitKeys(props, OWN_PROP_KEYS);
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
