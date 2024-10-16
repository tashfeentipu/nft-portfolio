import { TrendingCollection } from "@/components/homepage/trendingCollections";

export default function HomePage() {
  return (
    <div>
      <div>
        <h1>Trending Collection</h1>
        <h3>Checkout our weekly updated trending collection.</h3>
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
  );
}
