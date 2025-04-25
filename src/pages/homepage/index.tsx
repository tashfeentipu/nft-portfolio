import { BrowseCategoriesData, DiscoverMoreNFTsData, HowItWorksData, TopCreatorsData } from "../../constants/homepage_data";
import { TrendingCollection } from "@/components/homepage/trendingCollections";
import { InputBoxNewsLetter } from "@/components/shared/inputBoxNewsLetter";
import { BrowseCategory } from "@/components/homepage/browseCategory";
import { MainComponent } from "@/components/homepage/mainComponent";
import { DiscoverNFTs } from "@/components/homepage/discoverNFTs";
import { TopCreators } from "@/components/homepage/topCreators";
import { HowItWorks } from "@/components/homepage/howItWorks";
import { Button } from "@/components/shared/button";
import { useRouter } from "next/router";
import Image from "next/image";

export default function HomePage() {

  const router = useRouter()

  return (
    <div className="md:mx-[15%] mx-[5%]">
      <MainComponent />
      <div>
        <div className="my-5" >
          <div className="text-text md:text-3xl text-2xl font-bold my-5" >Trending Collection</div>
          <div className="text-text" >Checkout our weekly updated trending collection</div>
        </div>
        <div className="flex justify-between flex-col md:flex-row" >
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
          <Button
            imagePath="/assets/icons/RocketLaunch.svg"
            title="View Rankings"
            onClick={() => { router.push("/rankings") }}
          />
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-x-10 md:gap-y-10 gap-y-5">
          {TopCreatorsData.map((element: any, index: any) => {
            return <TopCreators
              key={index}
              index={index + 1}
              title={element.title}
              imagePath={element.avatar}
            />
          })}
        </div>
      </div>
      <div>
        <div className="text-text text-3xl font-bold my-5" >Browse Categories</div>
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-x-10 md:gap-y-10 gap-y-5">
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
      <div className="mb-10 ">
        <div className="flex justify-between md:flex-row flex-col items-center" >
          <div className="my-5" >
            <div className="text-text text-3xl font-bold my-5">Discover More NFTs</div>
            <div className="text-text" >Explore new trending NFTs</div>
          </div>
          <Button
            imagePath="/assets/icons/Eye.svg"
            title="See All"
            onClick={() => { router.push("/marketplace") }}
          />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-10 md:gap-y-10 gap-y-5" >
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
      <div className="relative w-full h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/assets/Highlight.png')" }}>

      </div>
      <div>
        <div className="flex justify-between md:flex-row flex-col items-center" >
          <div className="my-5" >
            <div className="text-text text-3xl font-bold my-5">How it works</div>
            <div className="text-text" >Find out how to get started</div>
          </div>
          <Button
            title="See All"
            imagePath="/assets/icons/Eye.svg"
            onClick={() => { router.push("/marketplace") }}
          />
        </div>
        <div className="flex justify-between flex-col md:flex-row" >
          {HowItWorksData.map((element: any, index: any) => {
            return <HowItWorks
              key={index}
              icon={element.icon}
              title={element.title}
              description={element.description} />
          })}
        </div>
      </div>
      <div className="bg-background-secondary rounded-[20px] flex justify-between flex-col md:flex-row my-5 md:p-10" >
        <div>
          <Image
            src={"/assets/NewsLetter.png"}
            alt={"News Letter"}
            height={310}
            width={400}
          />
        </div>
        <div className="md:w-[50%] md:p-0 p-5">
          <div className="font-bold text-text text-3xl w-full mb-5">Join our weekly digest</div>
          <div className="text-text mb-5">Get exclusive promotions & updates straight to your inbox</div>
          <InputBoxNewsLetter />
        </div>
      </div>
    </div>
  );
}
