import Image from 'next/image'

export function Button({ title, imagePath, onClick }:
    { title: string, imagePath: string, onClick?: () => void }) {
    return (
        <button className="button" onClick={onClick} >
            <Image src={imagePath} alt="Rankings Icon" width={20} height={20} className="mr-2" />
            {title}
        </button>
    );
}
