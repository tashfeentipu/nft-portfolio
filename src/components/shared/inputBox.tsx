import Image from 'next/image';

export function InputBox({placeholder} : {placeholder: string}) {
    return (
        <div className="relative w-[330px]">
            <input type="text" placeholder={placeholder} className="pl-10 w-full pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 ">
                <Image src={'/assets/icons/Eye.svg'} alt={"Input Icon"} height={20} width={20} />
            </div>
        </div>
    );
}
