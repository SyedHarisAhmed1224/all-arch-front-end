"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

interface NavBarProps {
    onAuthClick: (authType: number) => void
}

const NavBar: React.FC<NavBarProps> = ({ onAuthClick }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="w-full border-b border-neutral-200 bg-[#f5f2ef]">
            <div className="mx-auto flex h-20 items-center justify-between px-6 lg:px-10">

                <div className="flex flex-col leading-none">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        <span className="text-black">ALL</span>
                        <span className="text-red-600">ARCH</span>
                    </h1>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                        The Hub of All Research
                    </p>
                </div>

                <div className="hidden items-center gap-10 md:flex">
                    <Link href="#" className="text-sm font-medium text-neutral-700 transition hover:text-black">Portals</Link>

                    <Link href="#" className="text-sm font-medium text-neutral-700 transition hover:text-black">Program</Link>

                    <Link href="#" className="text-sm font-medium text-neutral-700 transition hover:text-black">Services</Link>

                    <Link href="#" className="text-sm font-medium text-neutral-700 transition hover:text-black">Rewards</Link>
                </div>

                <div className="hidden items-center gap-3 md:flex">
                    <button onClick={() => { onAuthClick(1) }} className="cursor-pointer rounded-full border border-neutral-300 px-6 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100">
                        Log In
                    </button>

                    <button onClick={() => { onAuthClick(0) }} className="cursor-pointer rounded-full bg-red-600 px-6 py-2 text-sm font-bold text-white transition hover:bg-red-700">
                        Sign Up Free
                    </button>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? (
                        <X className="h-7 w-7 text-black" />
                    ) : (
                        <Menu className="h-7 w-7 text-black" />
                    )}
                </button>
            </div>

            {isOpen && (
                <div className="border-t border-neutral-200 bg-[#f5f2ef] md:hidden">
                    <div className="flex flex-col gap-5 px-6 py-6">

                        <Link href="#" className="text-sm font-medium text-neutral-700">Portals</Link>

                        <Link href="#" className="text-sm font-medium text-neutral-700">Program</Link>

                        <Link href="#" className="text-sm font-medium text-neutral-700">Services</Link>

                        <Link href="#" className="text-sm font-medium text-neutral-700">Rewards</Link>

                        <div className="flex flex-col gap-3 pt-2">
                            <button className="rounded-full border border-neutral-300 px-6 py-2 text-sm font-medium text-neutral-800">
                                Log In
                            </button>

                            <button className="rounded-full bg-red-600 px-6 py-2 text-sm font-semibold text-white">
                                Sign Up Free
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavBar