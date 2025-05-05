import Image from 'next/image'

export function TopCreators({ title, imagePath, index }:
    { title: string, imagePath: string, index: number }) {
    return (
        <div className='flex md:flex-col flex-row items-center md:justify-center justify-around
                        bg-background-secondary relative rounded-[20px] md:h-[240px] md:w-[238px]'>
            <Image
                src={`/assets/topCreators/${imagePath}.png`}
                className='my-4'
                alt={imagePath}
                height={120}
                width={110}
            />
            <div>
                <div className='text-text text-md font-bold' >{title}</div>
                <div className='text-caption-label-text' >Total Sales: <span className='text-text' >34.63 ETH</span> </div>
                <div className='card-ranking'>{index}</div>
            </div>
        </div>
    );
}
