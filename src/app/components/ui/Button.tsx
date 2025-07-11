import { HTMLAttributes } from 'react';

type ButtonVariants = 'primary' | 'secondary';

interface ButtonProps {
    as?: 'button' | 'link';
    label: string;
    variant?: Record<
        ButtonVariants,
        Pick<HTMLAttributes<HTMLButtonElement>, 'className'>
    >;
}

const defaultVariant: ButtonProps['variant'] = {
    primary: { className: 'bg-zinc-500' },
    secondary: { className: 'bg-zinc-300' },
};

export default function Button({
    as = 'button',
    label,
    variant = defaultVariant,
}: ButtonProps) {
    return <button className={variant?.primary.className}>{label}</button>;
}
