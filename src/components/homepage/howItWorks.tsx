import Image from 'next/image'

export function HowItWorks({ title, description, icon }:
    { icon: string, title: string, description: string, }) {
    return (
        <div className='flex md:flex-col flex-row items-center md:justify-center py-3 
                        bg-background-secondary rounded-[20px] md:w-[330px] md:my-0 my-3
                        justify-between px-3 md:px-0'>
            <img
                src={`/assets/HowItWorks/${icon}.svg`}
                className='h-auto md:w-[250px] w-[80px]'
                alt={`${icon}`}
            />
            <div className='w-[70%]' >
                <div className='text-text font-bold w-full my-2' >{title}</div>
                <div className='text-text'>{description}</div>
            </div>
        </div>
    );
}
