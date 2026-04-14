import { Code, BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-full space-y-6">

            {/* BACKGROUND */}
            <div className="fixed inset-0 -z-10 bg-[#f3e0e0]" />

            {/* HERO CARD */}
            <section className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
                <h1 className="text-3xl font-bold leading-tight
                bg-gradient-to-r from-[#f8b195] via-[#f67280] to-[#c06c84]
                bg-clip-text text-transparent mb-2">
                    Welcome to Frontend Manual
                </h1>

                <p className="text-[#6c5b7b] max-w-xl">
                    Learn, practice and build — everything you need to master frontend development in one place.
                </p>
            </section>

            {/* DASHBOARD CARDS */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-[#f67280]/20">
                            <BookOpen className="h-5 w-5 text-[#f67280]" />
                        </div>

                        <h3 className="font-semibold text-[#355c7d]">
                            Start Learning
                        </h3>
                    </div>

                    <p className="text-sm text-[#6c5b7b] mb-4">
                        Begin with HTML, CSS and JavaScript fundamentals.
                    </p>

                    <Link
                        to="/html"
                        className="flex items-center gap-2 text-sm text-[#f67280] hover:underline"
                    >
                        Go to HTML <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-[#c06c84]/20">
                            <Code className="h-5 w-5 text-[#c06c84]" />
                        </div>

                        <h3 className="font-semibold text-[#355c7d]">
                            Practice
                        </h3>
                    </div>

                    <p className="text-sm text-[#6c5b7b] mb-4">
                        Improve your skills with real examples and exercises.
                    </p>

                    <Link
                        to="/javascript"
                        className="flex items-center gap-2 text-sm text-[#c06c84] hover:underline"
                    >
                        Practice JS <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-[#f8b195]/20">
                            <Sparkles className="h-5 w-5 text-[#f8b195]" />
                        </div>

                        <h3 className="font-semibold text-[#355c7d]">
                            Build Projects
                        </h3>
                    </div>

                    <p className="text-sm text-[#6c5b7b] mb-4">
                        Apply your knowledge by creating real apps for your portfolio.
                    </p>

                    <Link
                        to="/react"
                        className="flex items-center gap-2 text-sm text-[#f8b195] hover:underline"
                    >
                        Go to React <ArrowRight size={14} />
                    </Link>
                </div>

            </section>

            {/* PROGRESS CARD */}
            <section className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm space-y-4">
                <h2 className="text-lg font-semibold text-[#355c7d]">
                    Your Progress
                </h2>

                <div className="space-y-3">

                    <div>
                        <div className="flex justify-between text-xs text-[#6c5b7b] mb-1">
                            <span>HTML</span>
                            <span>40%</span>
                        </div>
                        <div className="w-full h-2 bg-black/5 rounded-full">
                            <div className="h-2 w-[40%] bg-[#f67280] rounded-full" />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between text-xs text-[#6c5b7b] mb-1">
                            <span>CSS</span>
                            <span>25%</span>
                        </div>
                        <div className="w-full h-2 bg-black/5 rounded-full">
                            <div className="h-2 w-[25%] bg-[#c06c84] rounded-full" />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between text-xs text-[#6c5b7b] mb-1">
                            <span>JavaScript</span>
                            <span>10%</span>
                        </div>
                        <div className="w-full h-2 bg-black/5 rounded-full">
                            <div className="h-2 w-[10%] bg-[#f8b195] rounded-full" />
                        </div>
                    </div>

                </div>
            </section>

            {/* ABOUT CARD */}
            <section className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
                <h2 className="text-lg font-semibold text-[#355c7d] mb-2">
                    About this guide
                </h2>

                <p className="text-sm text-[#6c5b7b] max-w-2xl">
                    This manual combines structured learning with a practical dashboard,
                    helping you stay organized while improving your frontend skills.
                </p>
            </section>

        </div>
    );
}