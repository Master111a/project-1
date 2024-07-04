export default function Button({ className, title, children }) {
    return (
        <div
            className={`${className} px-4 py-2 lg:px-8 lg:py-4 rounded-full cursor-pointer font-semibold lg:font-bold`}>
            {children ? children : title}
        </div>
    );
}
