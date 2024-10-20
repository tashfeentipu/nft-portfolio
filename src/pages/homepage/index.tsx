import { TopCreators } from "@/components/homepage/topCreators";
import { TrendingCollection } from "@/components/homepage/trendingCollections";
import { BrowseCategoriesData, DiscoverMoreNFTsData, TopCreatorsData } from "./data";
import Image from 'next/image'
import { Button } from "@/components/shared/button";
import { BrowseCategory } from "@/components/homepage/browseCategory";
import { DiscoverNFTs } from "@/components/homepage/discoverNFTs";

export default function HomePage() {
  return (
    <div>
      <div>
        <div className="my-5" >
          <div className="text-text text-3xl font-bold my-5" >Trending Collection</div>
          <div className="text-text" >Checkout our weekly updated trending collection</div>
        </div>
        <div className="flex justify-between" >
          <TrendingCollection
            pathPrimary={"primary1"}
            pathSecondary1={"secondary1"}
            pathSecondary2={"secondary2"}
          />
          <TrendingCollection
            pathPrimary={"primary2"}
            pathSecondary1={"secondary3"}
            pathSecondary2={"secondary4"}
          />
          <TrendingCollection
            pathPrimary={"primary3"}
            pathSecondary1={"secondary5"}
            pathSecondary2={"secondary6"}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center" >
          <div className="my-5" >
            <div className="text-text text-3xl font-bold my-5" >Top Creators</div>
            <div className="text-text" >Checkout Top Rated Creators on the NFT Marketplace</div>
          </div>
          <Button imagePath="/assets/icons/RocketLaunch.svg" title="View Rankings" />
        </div>
        <div className="grid grid-cols-4 gap-x-10 gap-y-10">
          {TopCreatorsData.map((element: any, index: any) => {
            return <TopCreators
              index={index + 1}
              key={index}
              title={element.title}
              imagePath={element.avatar}
            />
          })}
        </div>
      </div>
      <div>
        <div className="text-text text-3xl font-bold my-5" >Browse Categories</div>
        <div className="grid grid-cols-4 gap-x-10 gap-y-10">
          {BrowseCategoriesData.map((element: any, index: any) => {
            return <BrowseCategory
              key={index}
              icon={element.icon}
              title={element.title}
              background={element.background}
            />
          })}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center" >
          <div className="my-5" >
            <div className="text-text text-3xl font-bold my-5" >Discover More NFTs</div>
            <div className="text-text" >Explore new trending NFTs</div>
          </div>
          <Button imagePath="/assets/icons/Eye.svg" title="See All" />
        </div>
        <div className="flex justify-between" >
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
    </div>
  );
}
