import { InputBox } from "@/components/shared/inputBox";

export default function CreateAccount() {
  return (
    <div className="flex md:flex-row flex-col" >
      <img src={"/assets/createAccount/main.png"} alt={"Create Account"} />
      <div className="flex justify-center items-start w-full my-5" >
        <div className="flex flex-col justify-center" >
          <div className="flex flex-col h-auto md:w-[460px] justify-between md:items-start items-center md:mb-[40px] mb-[10px]">
            <h1 className="text-text font-bold text-3xl" >Create Acocunt</h1>
            <p className="text-text text-center md:text-start" >Welcome! enter your details and start creating, collecting and selling NFTs.</p>
          </div>
          <div className="flex flex-col h-[290px] justify-between items-center md:items-start" >
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
