import { Footer } from './footer';
import { Header } from './header';

export function Layout({ children }: {children: React.ReactNode}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
