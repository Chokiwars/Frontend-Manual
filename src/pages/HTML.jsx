import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function HTMLPage() {
    return (
        <div className="min-h-full flex justify-center">
            <div className="w-full max-w-5xl space-y-6">

                {/* HERO */}
                <Card className="p-6 text-center flex flex-col items-center">
                    <h1 className="text-3xl font-bold
                    bg-gradient-to-r from-[#f8b195] via-[#f67280] to-[#c06c84]
                    bg-clip-text text-transparent">
                        HTML
                    </h1>

                    <p className="text-[#6c5b7b] max-w-xl mt-2">
                        The foundation of every website. HTML defines the structure of your content.
                    </p>
                </Card>

                {/* O QUE É */}
                <Card className="space-y-3">
                    <h2 className="text-lg font-semibold text-[#355c7d]">
                        What is HTML?
                    </h2>

                    <p className="text-sm text-[#6c5b7b]">
                        HTML (HyperText Markup Language) is used to create the structure of web pages.
                        It tells the browser what each part of your content is — like headings, paragraphs, links and more.
                    </p>
                </Card>

                {/* ESTRUTURA */}
                <Card className="space-y-3">
                    <h2 className="text-lg font-semibold text-[#355c7d]">
                        Basic Structure
                    </h2>

                    <p className="text-sm text-[#6c5b7b]">
                        Every HTML page follows a standard structure:
                    </p>

                    <div className="bg-black/5 rounded-xl p-4 text-sm font-mono text-[#355c7d] overflow-x-auto">
                        {`<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello world</h1>
  </body>
</html>`}
                    </div>
                </Card>

                {/* EXEMPLO */}
                <Card className="space-y-3">
                    <h2 className="text-lg font-semibold text-[#355c7d]">
                        Example Elements
                    </h2>

                    <div className="space-y-2 text-sm text-[#6c5b7b]">
                        <p><strong>&lt;h1&gt;</strong> → Main heading</p>
                        <p><strong>&lt;p&gt;</strong> → Paragraph</p>
                        <p><strong>&lt;a&gt;</strong> → Link</p>
                        <p><strong>&lt;img&gt;</strong> → Image</p>
                    </div>
                </Card>

                {/* NEXT STEP */}
                <Card className="text-center flex flex-col items-center space-y-3">
                    <h2 className="text-lg font-semibold text-[#355c7d]">
                        Next Step
                    </h2>

                    <p className="text-sm text-[#6c5b7b] max-w-md">
                        Now that you understand HTML basics, let's move on to styling with CSS.
                    </p>

                    <Button>
                        Go to CSS
                    </Button>
                </Card>

            </div>
        </div>
    );
}