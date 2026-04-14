import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="h-screen">
            <Header />
            <Sidebar />

            <main
                className="pt-16 pl-64 p-6 h-screen overflow-y-auto"
                style={{
                    backgroundColor: "var(--color-deep)",
                }}
            >
                <Outlet />
            </main>
        </div>
    );
}