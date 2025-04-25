export function BrowseCategory({ title, background, icon }:
    { title: string, background: string, icon: string }) {
        console.log(icon);
        
    return (
        <div className='card'>
            <img
                src={`/assets/browseCategories/${background}.png`}
                alt={background}
                className='custom-shadow object-cover h-auto md:w-[240px] w-full'
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
