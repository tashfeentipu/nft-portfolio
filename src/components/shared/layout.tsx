import Image from 'next/image'
import { Footer } from './footer';
import { Header } from './header';

export function Layout({ children }: any) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
