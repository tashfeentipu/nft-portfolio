import Image from 'next/image'

export function TopCreators({ title, imagePath, index }:
    { title: string, imagePath: string, index: string }) {
    return (
        <div className='card h-[240px] w-[238px]'>
            <Image
                src={`/assets/topCreators/${imagePath}.png`}
                alt={imagePath}
                className='my-4'
                height={120}
                width={110}
            />
            <div className='text-text text-md font-bold' >{title}</div>
            <div className='text-caption-label-text' >Total Sales: <span className='text-text' >34.63 ETH</span> </div>
            <div className='card-ranking'>{index}</div>
        </div>
    );
}
