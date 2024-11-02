import { DiscoverNFTs } from "@/components/homepage/discoverNFTs";
import { DiscoverMoreNFTsData } from "../artist/data";
import Image from 'next/image';

export default function MarketPlace() {
  return (
    <div className="mx-[15%]" >
      <div className="my-5" >
        <div className="text-text text-3xl font-bold my-5" >Browse Marketplace</div>
        <div className="text-text mb-5" >Browse through more than 50k NFTs on the NFT Marketplace.</div>
        <div className="relative">
          <input type="text" placeholder={"Search your favourite NFTs"} className="w-full h-[50px] pl-5 bg-transparent border border-background-secondary rounded-xl" />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 ">
            <Image src={'/assets/icons/MagnifyingGlass.svg'} alt={"Search Icon"} height={20} width={20} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 my-5" >
        {DiscoverMoreNFTsData.map((element: any, index: any) => {
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
  );
}
