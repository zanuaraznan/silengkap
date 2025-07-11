import Logo from './Logo';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { addSpaceBetweenWords, toKebabCase } from '@/utils/components';
import { NAV_LIST } from '@/config/constants';
import type { NavDropdown } from '@/config/constants';
import { ChevronDown } from 'lucide-react';

interface NavProps extends Omit<HTMLAttributes<HTMLAnchorElement>, 'href'> {
    label: string;
    slug?: string;
}

function Nav({ ...props }: NavProps) {
    return (
        <Link
            {...props}
            href={
                props.label === 'beranda'
                    ? '/'
                    : `/${props.slug}${toKebabCase(props.label)}`
            }>
            {props.label}
        </Link>
    );
}

function NavDropdown({ data }: { data: NavDropdown }) {
    return Object.entries(data).map(([key, values]) => (
        <div key={key} className='relative group'>
            <span className='nav-item flex items-center gap-2 cursor-pointer'>
                {addSpaceBetweenWords(key)}
                <ChevronDown
                    size={18}
                    className='shrink-0 group-hover:rotate-180 transition-transform'
                />
            </span>

            <div className='absolute left-0 top-full w-full h-4 z-10' />

            <div className='absolute right-0 top-[calc(100%+1rem)] p-3 rounded-lg bg-white space-y-2 w-[200%] hidden group-hover:block'>
                {values.map((value) => (
                    <Nav
                        className='block font-normal nav-item'
                        key={value}
                        label={value}
                        slug={`${toKebabCase(key)}/`}
                    />
                ))}
            </div>
        </div>
    ));
}

export default function Navbar() {
    return (
        <header className='bg-white sticky top-0 z-[999] w-full p-4'>
            <div className='container flex justify-between items-center gap-4'>
                <Link href='/' aria-label='Logo Silengkap'>
                    <Logo className='h-6 w-fit fill-primary-400' />
                </Link>
                <div className='flex gap-4 items-center'>
                    {NAV_LIST.map((nav, idx) =>
                        typeof nav === 'string' ? (
                            <Nav className='nav-item' key={idx} label={nav} />
                        ) : (
                            <NavDropdown key={idx} data={nav} />
                        )
                    )}
                </div>
            </div>
        </header>
    );
}
