export default function ButtonIcon({ className, children, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`flex items-center justify-center rounded-full ${className}`}>
            {children}
        </div>
    );
}
