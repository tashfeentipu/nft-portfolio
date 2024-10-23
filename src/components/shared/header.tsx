import Image from 'next/image'
import { InputBoxNewsLetter } from './inputBoxNewsLetter';
import { Button } from './button';
import { ButtonFilled } from './buttonFilled';

export function Header() {
    return (
        <div className='h-[100px] flex justify-between items-center mx-10' >
            <div className='flex items-center' >
                <Image src={'./assets/icons/logo.svg'} alt={'Logo'} width={32} height={32} />
                <p className='ml-3 font-bold text-text'>NFT Marketplace</p>
            </div>
            <div className='flex w-[40%] justify-between items-center' >
                <p className='text-caption-label-text'>Marketplace</p>
                <p className='text-caption-label-text'>Rankings</p>
                <p className='text-caption-label-text'>Connect a wallet</p>
                <button className="bg-call-to-action text-text flex justify-center w-[152px] h-[60px] items-center rounded-xl">
                    <Image src={'./assets/icons/User.svg'} alt="Sign Up" width={20} height={20} className="mr-2" />
                    Sign Up
                </button>
            </div>
        </div>
    );
}
