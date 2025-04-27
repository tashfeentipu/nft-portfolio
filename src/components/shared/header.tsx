import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
    const router = useRouter()
    return (
        <div className='h-[80px] flex justify-between items-center mx-10' >
            <Link href={'/homepage'} className='flex items-center'>
                <img src={'/assets/icons/logo.svg'} alt={'Logo'} width={32} height={32} />
                <p className='ml-3 font-bold text-text'>NFT Marketplace</p>
            </Link>
            <div className='flex w-[40%] justify-between items-center' >
                <button
                    className='text-caption-label-text'
                    onClick={() => { router.push('/marketplace') }}
                >
                    Marketplace
                </button>
                <button className='text-caption-label-text' onClick={() => { router.push('/rankings') }}>Rankings</button>
                <button className='text-caption-label-text' onClick={() => { router.push('/connectWallet') }}>Connect a wallet</button>
                <button
                    className="bg-call-to-action text-text flex justify-center w-[152px] h-[50px] items-center rounded-xl"
                    onClick={() => { router.push('/account') }}
                >
                    <img src={'/assets/icons/User.svg'} alt="Sign Up" width={20} height={20} className="mr-2" />
                    Sign Up
                </button>
            </div>
        </div>
    );
}
