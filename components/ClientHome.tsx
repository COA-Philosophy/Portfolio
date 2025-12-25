"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Works } from "@/components/sections/Works"
import { Contact } from "@/components/sections/Contact"
import { Blog } from "@/components/sections/Blog"
import { OpeningAnimation } from "@/components/art/OpeningAnimation"
import type { BlogPost } from "@/lib/blog"

interface ClientHomeProps {
    posts: BlogPost[]
}

export function ClientHome({ posts }: ClientHomeProps) {
    const [showOpening, setShowOpening] = useState(true)

    return (
        <div className="flex min-h-screen flex-col font-sans">
            <AnimatePresence>
                {showOpening && (
                    <OpeningAnimation onComplete={() => setShowOpening(false)} />
                )}
            </AnimatePresence>

            {!showOpening && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <Hero />
                    <About />
                    <Skills />
                    <Works />
                    <Blog posts={posts} />
                    <Contact />
                </motion.div>
            )}
        </div>
    );
}
