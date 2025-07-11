import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import Navbar from './components/ui/Navbar';

const openSans = Open_Sans({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: {
        default: siteConfig.title,
        template: '%s',
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: siteConfig.title,
        locale: 'en-US',
        type: 'website',
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${openSans.className} text-zinc-800 bg-primary-50 antialiased`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
