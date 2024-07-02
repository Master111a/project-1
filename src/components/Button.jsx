export default function Button({ className, title, children }) {
  return (
    <div
      className={`border-none outline-none px-8 py-4 rounded-full cursor-pointer font-bold ${className}`}>
      {children ? children : title}
    </div>
  );
}
