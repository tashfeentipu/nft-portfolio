import Image from 'next/image'

export function TrendingCollection({ pathPrimary, pathSecondary1, pathSecondary2 }:
    { pathPrimary: string, pathSecondary1: string, pathSecondary2: string }) {
    return (
        <div className='w-[330px]' >
            <div className='mb-5' >
                <Image
                    src={`/assets/trendingCollections/${pathPrimary}.png`}
                    alt={`${pathPrimary}`}
                    width={330}
                    height={330}
                />
            </div>
            <div className='flex justify-between' >
                <Image
                    src={`/assets/trendingCollections/${pathSecondary1}.png`}
                    alt={`${pathSecondary1}`}
                    width={100}
                    height={100}
                />
                <Image
                    src={`/assets/trendingCollections/${pathSecondary2}.png`}
                    alt={`${pathSecondary2}`}
                    width={100}
                    height={100}
                />
                <div className='w-100 bg-pink-500 flex justify-center items-center rounded-custom' >
                    1025+
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}
