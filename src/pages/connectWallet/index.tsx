import { InputBox } from "@/components/shared/inputBox";
import Image from "next/image";

export default function ConnectWallet() {
    return (
        <div className="flex h-[640px]" >
            <img src={"/assets/connectWallet/main.png"} alt={"Create Account"} className="w-full h-auto" />
            <div className="flex justify-center items-center w-full" >
                <div className="flex flex-col justify-center" >
                    <div className="flex flex-col h-[100px] w-[460px] justify-between mb-[40px]">
                        <h1 className="text-text font-bold text-3xl" >Connect Wallet</h1>
                        <p className="text-text" >Choose a wallet you want to connect. There are several wallet providers.</p>
                    </div>
                    <div className="flex flex-col h-[290px] justify-between" >
                        <button className="flex items-center px-10 text-text font-bold h-[72px] w-[320px] bg-background-secondary rounded-xl border border-call-to-action" >
                            <Image src={'/assets/icons/Metamask.svg'} alt="MetaMask" width={40} height={40} className="mr-4" />
                            Metamask
                        </button>
                        <button className="flex items-center px-10 text-text font-bold h-[72px] w-[320px] bg-background-secondary rounded-xl border border-call-to-action" >
                            <Image src={'/assets/icons/WalletConnect.svg'} alt="MetaMask" width={40} height={40} className="mr-4" />
                            Wallet Connect
                        </button>
                        <button className="flex items-center px-10 text-text font-bold h-[72px] w-[320px] bg-background-secondary rounded-xl border border-call-to-action" >
                            <Image src={'/assets/icons/Coinbase.svg'} alt="MetaMask" width={40} height={40} className="mr-4" />
                            Coinbase
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
