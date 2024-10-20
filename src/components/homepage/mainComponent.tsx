import Image from 'next/image'

export function MainComponent() {
    return (
        <div className="mx-[15%] flex justify-between my-10" >
            <div className="w-[50%] flex flex-col justify-between">
                <div>

                    <div className="font-bold text-text text-5xl w-full mb-5">Discover digital art & Collect NFTs</div>
                    <div className="text-text mb-5">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</div>
                    <button className="bg-call-to-action px-10 text-text h-[60px] rounded-xl flex justify-center items-center">
                        Get Started
                    </button>
                </div>
                <div className='flex justify-between' >
                    <div>
                        <div className='text-text text-3xl font-bold'>240k+</div>
                        <div className='text-text text-xl'>Total Sale</div>
                    </div>
                    <div>
                        <div className='text-text font-bold text-3xl'>100k+</div>
                        <div className='text-text text-xl'>Auctions</div>
                    </div>
                    <div>
                        <div className='text-text font-bold text-3xl'>240k+</div>
                        <div className='text-text text-xl'>Artists</div>
                    </div>
                </div>
            </div>
            <div className="card">
                <Image
                    src={"/assets/Banner.png"}
                    alt={"News Letter"}
                    height={310}
                    width={400}
                />
                <div className="w-full p-3" >
                    <div className="text-text mb-3 text-xl font-bold" >Space Walking</div>
                    <div className='flex items-center' >
                        <Image
                            src={`/assets/avatars/avatar1.svg`}
                            alt={`avatar`}
                            width={30}
                            height={30}
                        />
                        <span className='ml-3 text-text'>AnimaKid</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
