import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export default function Button({
    className = "",
    variant = "primary",
    size = "md",
    children,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants: Record<string, string> = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600",
        secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-600",
        outline:
            "border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-400",
        ghost: "text-gray-900 hover:bg-gray-100 focus:ring-gray-400",
    };

    const sizes: Record<string, string> = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
