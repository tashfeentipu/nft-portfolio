
export function TrendingCollection({ pathPrimary, pathSecondary1, pathSecondary2 }:
    { pathPrimary: string, pathSecondary1: string, pathSecondary2: string }) {
    return (
        <div className='mb-3 md:mb-0' >
            <div className='md:mb-5 mb-3' >
                <img
                    src={`/assets/trendingCollections/${pathPrimary}.png`}
                    className='md:w-[330px] h-auto w-full'
                    alt={`${pathPrimary}`}
                />
            </div>
            <div className='flex justify-between' >
                <img
                    src={`/assets/trendingCollections/${pathSecondary1}.png`}
                    alt={`${pathSecondary1}`}
                    width={100}
                    height={100}
                />
                <img
                    src={`/assets/trendingCollections/${pathSecondary2}.png`}
                    alt={`${pathSecondary2}`}
                    width={100}
                    height={100}
                />
                <div className='w-100 bg-call-to-action text-text flex justify-center items-center rounded-custom' >
                    1025+
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}
