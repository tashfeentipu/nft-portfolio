import Image from "next/image";

export default function ConnectWallet() {
    return (
        <div className="flex md:flex-row flex-col " >
            <img src={"/assets/connectWallet/main.png"} alt={"Create Account"} className="w-full h-auto" />
            <div className="flex justify-center items-center w-full my-5">
                <div className="flex flex-col justify-center" >
                    <div className="flex flex-col h-[100px] md:w-[460px] justify-between items-center md:items-start mb-[40px]">
                        <h1 className="text-text font-bold text-3xl" >Connect Wallet</h1>
                        <p className="text-text text-center md:text-start mx-5 md:mx-0" >Choose a wallet you want to connect. There are several wallet providers.</p>
                    </div>
                    <div className="flex flex-col md:h-[290px] h-[250px] justify-between items-center md:items-start" >
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
