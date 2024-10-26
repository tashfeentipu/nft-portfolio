import { InputBox } from "@/components/shared/inputBox";
import Image from "next/image";

export default function CreateAccount() {
  return (
    <div className="flex" >
      <img src={"/assets/createAccount/main.png"} alt={"Create Account"} className="w-full h-auto"/>
      <div className="flex justify-center items-start w-full" >
        <div className="flex flex-col justify-center" >
          <div className="flex flex-col h-[100px] w-[460px] justify-between mb-[40px]">
            <h1 className="text-text font-bold text-3xl" >Create Acocunt</h1>
            <p className="text-text" >Welcome! enter your details and start creating, collecting and selling NFTs.</p>
          </div>
          <div className="flex flex-col h-[290px] justify-between" >
            <InputBox placeholder={"Username"} />
            <InputBox placeholder={"Email Address"} />
            <InputBox placeholder={"Password"} />
            <InputBox placeholder={"Confirm Password"} />
            <button className="bg-call-to-action text-text h-[46px] w-[330px] rounded-3xl" >Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
