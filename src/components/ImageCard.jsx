import React from "react";

export default function ImageCard({ src, className, children, rounded }) {
    return (
        <div className={className}>
            <img
                src={src}
                alt="image"
                className={`object-cover object-center w-full h-full px-4 lg:px-8 ${rounded}`}
            />
            {children}
        </div>
    );
}
