import Image from 'next/image'

export function Button({ title, imagePath, }:
    { title: string, imagePath: string }) {
    return (
        <button className="button">
            <Image src={imagePath} alt="Rankings Icon" width={20} height={20} className="mr-2" />
            {title}
        </button>
    );
}
