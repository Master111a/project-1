export default function ServiceItem({ item, active }) {
    return (
        <div
            className={`${
                active && "shadow-lg"
            } rounded-32 flex flex-col p-8 lg:p-12 xl:p-16 basis-full max-w-full md:basis-1/2 md:max-w-1/2 lg:basis-1/3 lg:max-w-[calc(100%/3)] xl:w-[350px] gap-y-8 lg:gap-y-16 flex-shrink-0 bg-white`}>
            <div className="w-full flex justify-center items-center">
                <img src={item?.src} alt="icon" />
            </div>
            <div className="w-full flex flex-col gap-y-4 lg:gap-y-8">
                <h4 className="text-2xl lg:text-28 font-bold !leading-1.2 text-center">
                    {item?.title}
                </h4>
                <p className="text-textDesc/50 text-base lg:text-lg text-center">
                    {item?.description}
                </p>
            </div>
        </div>
    );
}
