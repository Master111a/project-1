export default function ServiceItem({ item, active }) {
    return (
        <div
            className={`${
                active && "drop-shadow-7"
            } rounded-32 drop-shadow-7 flex flex-col p-16 basis-1/3 lg:w-[350px] gap-y-16 flex-shrink-0 bg-white`}>
            <div className="w-full flex justify-center items-center">
                <img src={item?.src} alt="icon" />
            </div>
            <div className="w-full flex flex-col gap-y-8">
                <h4 className="text-2xl lg:text-28 font-bold leading-1.2 text-center">
                    {item?.title}
                </h4>
                <p className="text-textDesc/50 text-base lg:text-lg text-center">
                    {item?.description}
                </p>
            </div>
        </div>
    );
}
