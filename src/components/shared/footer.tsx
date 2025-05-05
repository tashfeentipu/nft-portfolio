import { InputBoxNewsLetter } from './inputBoxNewsLetter';

export function Footer() {
    return (
        <div className='md:h-[280px] bg-background-secondary flex justify-center items-center' >
            <div className={`flex flex-col justify-between items-start w-full border-b border-caption-label-text p-5
                md:w-[1050px] md:h-[250px] md:items-center md:flex-row`} >
                <div className='h-full flex flex-col justify-between' >
                    <div className='flex items-center' >
                        <img src={'./assets/icons/logo.svg'} alt={'Logo'} width={32} height={32} />
                        <p className='ml-3 font-bold text-text'>NFT Marketplace</p>
                    </div>
                    <p className='text-caption-label-text' >NFT marketplace UI created with Anima for Figma.</p>
                    <p className='text-caption-label-text'>Join our community</p>
                    <div className='flex w-[150px] justify-between' >
                        <img src={'./assets/icons/DiscordLogo.svg'} alt={'Discord Logo'} width={32} height={32} />
                        <img src={'./assets/icons/InstagramLogo.svg'} alt={'Instagram Logo'} width={32} height={32} />
                        <img src={'./assets/icons/TwitterLogo.svg'} alt={'Twitter Logo'} width={32} height={32} />
                        <img src={'./assets/icons/YoutubeLogo.svg'} alt={'Youtube Logo'} width={32} height={32} />
                    </div>
                </div>
                <div className='h-full flex flex-col justify-between' >
                    <p className='text-text'>Explore</p>
                    <p className='text-caption-label-text'>Marketplace</p>
                    <p className='text-caption-label-text'>Rankings</p>
                    <p className='text-caption-label-text'>Connect a wallet</p>
                </div>
                <div className='h-full flex flex-col justify-between'>
                    <h2 className='text-text'>NFT Marktetplace</h2>
                    <p className='text-caption-label-text'>Get exclusive promotions & updates straight to your inbox</p>
                    <InputBoxNewsLetter />
                </div>
            </div>
        </div>
    );
}
