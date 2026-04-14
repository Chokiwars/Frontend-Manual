interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = "" }: CardProps) {
    return (
        <div
            className={`p-5 rounded-2xl bg-white border border-black/5 shadow-sm ${className}`}
        >
            {children}
        </div>
    );
}