import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Code2, Users, Zap, Lock, Github } from "lucide-react"
import { Link } from "react-router-dom"

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <Code2 className="h-6 w-6" />
                    <span className="ml-2 text-lg font-bold">CodeCollab</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
                        Features
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
                        How It Works
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Code Together, Innovate Faster
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Experience seamless real-time collaboration. Code, debug, and create with your team in perfect sync, no matter where you are.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Link to="/create-room">
                                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                        <Link to="/create-room">Get Started</Link>
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link to="https://github.com/SSShogunn/CodeBridge" target="_blank">
                                    <Button variant="outline">Learn More</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
                        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                            <div className="flex flex-col items-center space-y-3 text-center">
                                <Users className="h-12 w-12 text-primary" />
                                <h3 className="text-xl font-bold">Real-Time Collaboration</h3>
                                <p className="text-gray-500 dark:text-gray-400">Code together in real-time with your team members.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-3 text-center">
                                <Zap className="h-12 w-12 text-primary" />
                                <h3 className="text-xl font-bold">Instant Sync</h3>
                                <p className="text-gray-500 dark:text-gray-400">Changes sync instantly across all connected devices.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-3 text-center">
                                <Lock className="h-12 w-12 text-primary" />
                                <h3 className="text-xl font-bold">Secure Sharing</h3>
                                <p className="text-gray-500 dark:text-gray-400">Share your code securely with granular access controls.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
                        <div className="grid gap-6 lg:grid-cols-3">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">1</div>
                                <h3 className="text-xl font-bold">Create a Project</h3>
                                <p className="text-gray-500 dark:text-gray-400">Start a new coding project or import an existing one.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">2</div>
                                <h3 className="text-xl font-bold">Invite Your Team</h3>
                                <p className="text-gray-500 dark:text-gray-400">Add team members to collaborate on your project.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">3</div>
                                <h3 className="text-xl font-bold">Code in Real-Time</h3>
                                <p className="text-gray-500 dark:text-gray-400">Start coding together in real-time, seeing changes instantly.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Collaborating?</h2>
                                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Join thousands of developers who are already coding together. Try CodeCollab for free today.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <form className="flex space-x-2">
                                    <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                                    <Button type="submit">
                                        Get Started
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CodeCollab. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" to="https://github.com/SSShogunn" target="_blank">
                        <Github className="h-4 w-4" />
                    </Link>
                </nav>
            </footer>
        </div>
    )
}