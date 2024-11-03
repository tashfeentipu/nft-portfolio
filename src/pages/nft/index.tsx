import { DiscoverNFTs } from "@/components/homepage/discoverNFTs";
import { MoreNFTsData } from "./data";
import { Button } from "@/components/shared/button";

export default function NFT() {
  return (
    <div>
      <div>
        <img src={"/assets/NFTBanner.png"} alt="Artist Banner" className="w-full" />
      </div>
      <div className="mx-[15%]" >
        <div className="flex items-center justify-between my-5">
          <div className="text-text text-3xl font-bold">More From This Artist</div>
          <Button title={"Go To Artist Page"} imagePath={"./assets/icons/ArrowRIght.svg"} />
        </div>
        <div className="grid grid-cols-3 gap-10 my-5" >
          {MoreNFTsData.map((element: any, index: any) => {
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
