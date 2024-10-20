import Image from 'next/image'

export function HowItWorks({title, description, icon }:
    { icon: string, title: string,description: string, }) {
    return (
        <div className='card w-[330px]' >
            <div>
                <Image
                    src={`/assets/HowItWorks/${icon}.svg`}
                    alt={`${icon}`}
                    width={250}
                    height={250}
                />
            </div>
            <div className='w-[60%]' >
                <div className='text-text font-bold w-full my-2' >{title}</div>
                <div className='text-text'>{description}</div>
            </div>            
        </div>
    );
}
