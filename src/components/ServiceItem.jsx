export default function ServiceItem({ item, active }) {
    return (
        <div className="rounded-32 flex flex-col p-8 lg:p-12 xl:p-16 w-full h-full gap-y-8 lg:gap-y-16 flex-shrink-0 bg-white">
            <div className="w-full flex justify-center items-center">
                <img src={item?.src} alt="icon" />
            </div>
            <div className="w-full flex flex-col gap-y-4 lg:gap-y-8">
                <h4 className="text-base md:text-lg lg:text-2xl xl:text-28 font-bold !leading-1.2 text-center">
                    {item?.title}
                </h4>
                <p className="text-textDesc/50 text-sm md:text-base xl:text-lg text-center min-h-[84px] line-clamp-3">
                    {item?.description}
                </p>
            </div>
        </div>
    );
}
