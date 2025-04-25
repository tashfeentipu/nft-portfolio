import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router  = useRouter()
  useEffect(() => {
    router.push("./homepage")    
  }, [])
  return (
    <></>
  );
}

// https://www.figma.com/design/K97tzY51hEXVNvW4rU0pj8/NFT-Marketplace-Template---Create-an-NFT-website-in-minutes-(Community)?node-id=1996-14807&t=HgeVTqrfcFZLAuQj-0
