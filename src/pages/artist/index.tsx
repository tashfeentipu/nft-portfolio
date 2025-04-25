import { DiscoverNFTs } from "@/components/homepage/discoverNFTs";
import { useState } from "react";
import Image from 'next/image'
import { DiscoverMoreNFTsData } from "./data";

export default function Artist() {
  const [activeTab, setActiveTab] = useState("Created")
  return (
    <div>
      <div>
        <img src={"/assets/ArtistBanner.png"} alt="Artist Banner" className="w-full" />
      </div>
      <div className="mx-[15%]" >
        <div className="flex justify-between my-10 h-[300px]" >
          <div className="w-[50%] flex flex-col justify-between">
            <div className="font-bold text-text text-5xl w-full">Animakid</div>
            <div className='flex justify-between' >
              <div>
                <div className='text-text text-3xl font-bold'>250k+</div>
                <div className='text-text text-xl'>Volume</div>
              </div>
              <div>
                <div className='text-text font-bold text-3xl'>50+</div>
                <div className='text-text text-xl'>NFTs Sold</div>
              </div>
              <div>
                <div className='text-text font-bold text-3xl'>3000+</div>
                <div className='text-text text-xl'>Followers</div>
              </div>
            </div>
            <div className="text-caption-label-text">Bio</div>
            <div className="text-text">The internet's friendliest designer kid.</div>
            <div className="text-caption-label-text">Links</div>
            <div className='flex w-[150px] justify-between' >
              <Image src={'./assets/icons/DiscordLogo.svg'} alt={'Discord Logo'} width={32} height={32} />
              <Image src={'./assets/icons/InstagramLogo.svg'} alt={'Instagram Logo'} width={32} height={32} />
              <Image src={'./assets/icons/TwitterLogo.svg'} alt={'Twitter Logo'} width={32} height={32} />
              <Image src={'./assets/icons/YoutubeLogo.svg'} alt={'Youtube Logo'} width={32} height={32} />
            </div>
          </div>
          <div className="flex" >
            <button className="h-[60px] w-[186px] text-text bg-call-to-action rounded-xl flex justify-center items-center mr-5">
              <Image src={"./assets/icons/Eye.svg"} alt="Wallet Button" width={20} height={20} />
              0xc0E3...B79C
            </button>
            <button className="h-[60px] w-[186px] text-text border-2 border-call-to-action rounded-xl flex justify-center items-center" >
              <Image src={"./assets/icons/Eye.svg"} alt="Wallet Button" width={20} height={20} />
              <span className="ml-4">Follow</span>
            </button>
          </div>
        </div>
        <div className="flex justify-between h-[70px] border border-background-secondary rounded-3xl px-5">
          {[{ value: "Created", badge: "302" },
          { value: 'Owned', badge: "67" },
          { value: 'Collection', badge: "4" }].map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex w-1/4 justify-center items-center font-semibold py-2 focus:outline-none 
                        ${activeTab === tab.value ? 'text-text border-b-2 border-caption-label-text' : 'text-caption-label-text'}`}
            >
              {tab.value}
              <span className={`w-[30px] h-[30px] ml-2 px-6 bg-background-secondary flex justify-center items-center text-caption-label-text rounded-3xl
                ${activeTab === tab.value ? 'text-text bg-caption-label-text' : ''}`}
              >
                {tab.badge}
              </span>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-10 my-5" >
          {DiscoverMoreNFTsData.map((element: any, index: number) => {
            return <DiscoverNFTs
              key={index}
              title={element.title}
              avatar={element.avatar}
              background={element.background}
              avatarTitle={element.avatarTitle}
            />
          })}
        </div>
      </div>
    </div>
  );
}
