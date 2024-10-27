import Image from 'next/image'

export function TableItem({ title, imagePath, index }:
    { title: string, imagePath: string, index: number | string }) {
    return (
        <div className='w-full flex justify-between bg-background-secondary rounded-lg items-center p-2 my-2' >
            <div className='w-[30px] h-[30px] bg-background flex justify-center items-center text-caption-label-text rounded-full'>{index}</div>
            <div className='flex items-center justify-start w-[40%]' >
                <Image src={imagePath} alt={title} width={60} height={60} className='mx-4' />
                <div className='text-text mx-2'>{title}</div>
            </div>
            <div className='text-text-green w-[10%] flex justify-center'>+1.41%</div>
            <div className='text-text w-[10%] flex justify-center'>602</div>
            <div className='text-text w-[10%] flex justify-center'>12.4 ETH</div>
        </div>
    );
}
