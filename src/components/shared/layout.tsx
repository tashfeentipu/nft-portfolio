import Image from 'next/image'
import { Footer } from './footer';

export function Layout({ children }: any) {
    return (
        <div>
            {children}
            <Footer />
        </div>
    );
}
