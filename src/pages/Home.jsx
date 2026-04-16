import { Code, BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function Home() {
    return (
        <div className="min-h-full mt-5 flex justify-center">
            <div className="w-full max-w-5xl space-y-6">

                {/* BACKGROUND */}
                <div />

                {/* HERO */}
                <Card className="p-6 text-center flex flex-col items-center">
                    <h1 className="text-3xl font-bold leading-tight
                                bg-gradient-to-r from-[#f8b195] via-[#f67280] to-[#c06c84]
                                bg-clip-text text-transparent mb-2">
                        Welcome to Frontend Manual
                    </h1>

                    <p className="text-[#6c5b7b] max-w-xl leading-tight">
                        Learn, practice and build — everything you need to master frontend development in one place.
                    </p>
                </Card>

                {/* DASHBOARD */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <Card className="hover:shadow-md transition-all flex flex-col justify-between">
                        <div>
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
                        </div>

                        <Link to="/html">
                            <Button className="w-full flex items-center justify-center gap-2">
                                Go to HTML <ArrowRight size={14} />
                            </Button>
                        </Link>
                    </Card>

                    <Card className="hover:shadow-md transition-all flex flex-col justify-between">
                        <div>
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
                        </div>

                        <Link to="/javascript">
                            <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
                                Practice JS <ArrowRight size={14} />
                            </Button>
                        </Link>
                    </Card>

                    <Card className="hover:shadow-md transition-all flex flex-col justify-between">
                        <div>
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
                        </div>

                        <Link to="/react">
                            <Button variant="tertiary" className="w-full flex items-center justify-center gap-2">
                                Go to React <ArrowRight size={14} />
                            </Button>
                        </Link>
                    </Card>

                </section>

                {/* PROGRESS */}
                <Card className="space-y-4">
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
                </Card>

                {/* ABOUT */}
                <Card className="text-center flex flex-col items-center">
                    <h2 className="text-lg font-semibold text-[#355c7d] mb-2">
                        About this guide
                    </h2>

                    <p className="text-sm text-[#6c5b7b] max-w-2xl">
                        This manual combines structured learning with a practical dashboard,
                        helping you stay organized while improving your frontend skills.
                    </p>
                </Card>
            </div>
        </div >
    );
}