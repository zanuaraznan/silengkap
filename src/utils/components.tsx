import clsx from 'clsx';
import { ClassNameValue, twMerge } from 'tailwind-merge';

function cn(...inputs: ClassNameValue[]) {
    return twMerge(clsx(inputs));
}

function addSpaceBetweenWords(text: string) {
    return text.replace(/([a-z])([A-Z])/g, '$1 $2');
}

function toKebabCase(text: string) {
    return text
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+|_+/g, '-')
        .toLowerCase();
}

export { cn, addSpaceBetweenWords, toKebabCase };
