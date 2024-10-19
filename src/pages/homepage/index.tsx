import { TrendingCollection } from "@/components/homepage/trendingCollections";

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
        <div className="my-5" >
          <div className="text-text text-3xl font-bold my-5" >Top Creators</div>
          <div className="text-text" >Checkout Top Rated Creators on the NFT Marketplace</div>
        </div>
      </div>
    </div>
  );
}
