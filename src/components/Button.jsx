import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (        <button 
            className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium`} 
            {...props}
        >
            {children}
        </button>
    );
}
