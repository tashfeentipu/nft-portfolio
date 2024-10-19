import Image from 'next/image'

export function TopCreators({ title, imagePath }:
    { title: string, imagePath: string }) {
    return (
        <div>
            <Image src={imagePath} alt={imagePath} />
            <div>{title}</div>
            <div>Total Sales: <span>34.63 ETH</span> </div>
        </div>
    );
}
