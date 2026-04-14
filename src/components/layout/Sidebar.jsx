import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    FileText,
    Code,
    Braces,
    Atom,
    LogOut
} from "lucide-react";

export default function Sidebar() {
    const navigation = [
        { name: "Home", to: "/", icon: LayoutDashboard },
        { name: "HTML", to: "/html", icon: FileText },
        { name: "CSS", to: "/css", icon: Code },
        { name: "JavaScript", to: "/javascript", icon: Braces },
        { name: "React", to: "/react", icon: Atom },
    ];

    return (
        <aside className="fixed top-16 left-0 w-56 h-[calc(100vh-4rem)] flex flex-col border-r border-[#2c4a66] bg-[#355c7d]">

            {/* MENU */}
            <nav className="flex-1 px-3 py-4 space-y-1">
                {navigation.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `relative group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200
                                ${isActive
                                    ? "bg-[#f67280]/20 text-[#f8b195]"
                                    : "text-[#f8b195]/80 hover:bg-white/10 hover:text-white"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {/* BARRA ATIVA */}
                                    {isActive && (
                                        <div className="absolute left-0 h-5 w-1 rounded-r-full bg-[#f67280]" />
                                    )}

                                    <Icon
                                        className={`h-5 w-5 transition-colors ${isActive
                                            ? "text-[#f67280]"
                                            : "group-hover:text-white"
                                            }`}
                                    />

                                    <span className="tracking-wide">
                                        {item.name}
                                    </span>
                                </>
                            )}
                        </NavLink>
                    );
                })}
            </nav>

            {/* FOOTER */}
            <div className="border-t border-[#2c4a66] p-4 space-y-3">

                {/* USER */}
                <div className="flex items-center gap-3">
                    <div className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10">
                        <span className="text-xs text-white font-bold">
                            B
                        </span>
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-white">
                            Bia
                        </p>
                        <p className="text-[10px] uppercase tracking-widest text-[#f8b195]/70">
                            Dev
                        </p>
                    </div>
                </div>

                {/* LOGOUT */}
                <button
                    className="cursor-pointer w-full flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-[#f8b195]/80 transition-all duration-200 hover:bg-[#f67280]/20 hover:text-white"
                >
                    <LogOut className="h-5 w-5" />
                    Sair
                </button>
            </div>
        </aside>
    );
}