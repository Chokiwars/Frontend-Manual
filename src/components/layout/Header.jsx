import { Atom } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 backdrop-blur-md bg-[#355c7d]/90 border-b border-[#2c4a66]">

            {/* LOGO + TITLE */}
            <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg 
                bg-gradient-to-br from-[#f67280] to-[#c06c84] shadow-md">
                    <Atom className="h-5 w-5 text-white" />
                </div>

                <div className="flex flex-col">
                    <h1 className="text-sm font-bold tracking-wide 
                    bg-gradient-to-r from-[#f8b195] via-[#f67280] to-[#c06c84]
                    bg-clip-text text-transparent">
                        Frontend Manual
                    </h1>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="text-sm text-[#f8b195]/80 font-medium">
                Docs for frontend devs
            </div>
        </header>
    );
}