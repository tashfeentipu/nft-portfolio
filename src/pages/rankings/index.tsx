import { TableItem } from "@/components/rankings/tableItems";
import { TabView } from "@/components/shared/tabView";
import { RankingsData } from "../../constants/rankings_data";

export default function HomePage() {
  return (
    <div className="mx-[15%] flex flex-col justify-between my-10" >
      <div className="w-[50%] flex flex-col justify-between">
        <div>
          <div className="font-bold text-text text-5xl w-full mb-5">Top Creators</div>
          <div className="text-text mb-5">Check out top ranking NFT artists on the NFT Marketplace.</div>
        </div>
      </div>
      <TabView />
      <div className="mt-5" >
        <div className="flex w-full justify-between p-2 border-2 border-caption-label-text rounded-xl my-2" >
          <div className="text-text w-[30px] flex justify-center">#</div>
          <div className="text-text w-[40%] pl-4">Artist</div>
          <div className="text-text w-[10%] flex justify-center">Change</div>
          <div className="text-text w-[10%] flex justify-center">NFTs Sold</div>
          <div className="text-text w-[10%] flex justify-center">Volume</div>
        </div>
        {
          RankingsData.map((data, index) => <TableItem title={data.title} imagePath={`/assets/rankings/${data.avatar}.svg`} index={index + 1} />)
        }
      </div>
    </div>
  );
}
