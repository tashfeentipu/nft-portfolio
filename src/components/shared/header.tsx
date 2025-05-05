import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export function Header() {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="px-4">
            <div className="flex justify-between items-center h-[80px]">
                <Link href="/homepage" className="flex items-center">
                    <img src="/assets/icons/logo.svg" alt="Logo" width={32} height={32} />
                    <p className="ml-3 font-bold text-text text-base sm:text-lg">NFT Marketplace</p>
                </Link>

                <nav className="hidden md:flex w-[40%] justify-between items-center">
                    <button className="text-caption-label-text" onClick={() => router.push('/marketplace')}>Marketplace</button>
                    <button className="text-caption-label-text" onClick={() => router.push('/rankings')}>Rankings</button>
                    <button className="text-caption-label-text" onClick={() => router.push('/connectWallet')}>Connect a wallet</button>
                    <button
                        className="bg-call-to-action text-text flex justify-center w-[140px] h-[45px] items-center rounded-xl"
                        onClick={() => router.push('/account')}
                    >
                        <img src="/assets/icons/User.svg" alt="Sign Up" width={20} height={20} className="mr-2" />
                        Sign Up
                    </button>
                </nav>

                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <img
                            src="/assets/icons/Menu.svg"
                            alt="Menu"
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="flex flex-col md:hidden space-y-4">
                    <button className="text-caption-label-text text-left" onClick={() => { setIsMobileMenuOpen(false); router.push('/marketplace'); }}>Marketplace</button>
                    <button className="text-caption-label-text text-left" onClick={() => { setIsMobileMenuOpen(false); router.push('/rankings'); }}>Rankings</button>
                    <button className="text-caption-label-text text-left" onClick={() => { setIsMobileMenuOpen(false); router.push('/connectWallet'); }}>Connect a wallet</button>
                    <button
                        className="bg-call-to-action text-text flex justify-center items-center w-full h-[45px] rounded-xl"
                        onClick={() => { setIsMobileMenuOpen(false); router.push('/account'); }}
                    >
                        <img src="/assets/icons/User.svg" alt="Sign Up" width={20} height={20} className="mr-2" />
                        Sign Up
                    </button>
                </div>
            )}
        </header>
    );
}
