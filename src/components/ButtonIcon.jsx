export default function ButtonIcon({ className, children }) {
    return (
        <div
            className={`flex items-center justify-center rounded-full ${className}`}>
            {children}
        </div>
    );
}
