import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    className?: string;
}

export function Button({
    children,
    variant = "primary",
    className = "",
}: ButtonProps) {
    const variants = {
        primary: "bg-[#f67280] text-white hover:bg-[#e55c6b]",
        secondary: "bg-[#c06c84] text-white hover:bg-[#a85a70]",
        tertiary: "bg-[#f8b195] text-white hover:bg-[#e8a489]",
        ghost: "bg-transparent text-[#355c7d] hover:bg-black/5",
    };

    return (
        <button
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer scale-100 hover:scale-105
            ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}