import Image from 'next/image'

export function DiscoverNFTs({ background, avatar, title, avatarTitle }:
    { background: string, avatar: string, title: string, avatarTitle: string }) {
    return (
        <div className='card' >
            <div>
                <Image
                    src={`/assets/discoverMoreNFTs/${background}.png`}
                    alt={`${background}`}
                    width={330}
                    height={330}
                />
            </div>
            <div className='w-[80%]' >
                <div className='text-text font-bold w-full my-2' >{title}</div>
                <div className='flex items-center' >
                    <Image
                        src={`/assets/avatars/${avatar}.svg`}
                        alt={`${avatar}`}
                        width={30}
                        height={30}
                    />
                    <span className='ml-3 text-text'>{avatarTitle}</span>
                </div>
                <div className='flex justify-between my-2' >
                    <div>
                        <div className='text-caption-label-text'>Price</div>
                        <div className='text-text' >1.63 ETH</div>
                    </div>
                    <div className='text-end' >
                        <div className='text-caption-label-text'>Highest Bid</div>
                        <div className='text-text'>0.33 wETH</div>
                    </div>
                </div>
            </div>            
        </div>
    );
}
