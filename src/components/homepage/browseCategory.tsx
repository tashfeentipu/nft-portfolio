import Image from 'next/image'

export function BrowseCategory({ title, background, icon }:
    { title: string, background: string, icon: string }) {
    return (
        <div className='card'>
            <Image
                src={`/assets/browseCategories/${background}.png`}
                alt={background}
                width={240}
                height={240}
                className='custom-shadow object-cover'
            />
            <div className='h-[60px] flex justify-center items-center text-text font-bold size-10 w-[100%]'>{title}</div>
            {/* <div className='h-[240px] absolute top-0 flex items-center justify-center blur-sm' >
                <Image
                    src={`/assets/browseCategories/${icon}.png`}
                    alt={background}
                    width={100}
                    height={100}
                />
            </div> */}
        </div>
    );
}
