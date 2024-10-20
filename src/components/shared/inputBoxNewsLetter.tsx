import { Button } from './button';
import Image from "next/image";
import { ButtonFilled } from './buttonFilled';
export function InputBoxNewsLetter() {
    return (
        <div className="flex items-center h-10 rounded-3xl overflow-hidden ">
            <input
                type="text"
                placeholder="Enter your email here"
                className="border border-gray-300 px-4 h-full w-[60%]"
            />
            <ButtonFilled title={'Subscribe'} imagePath={'/assets/icons/Envelope.svg'} />
        </div>
    );
}
