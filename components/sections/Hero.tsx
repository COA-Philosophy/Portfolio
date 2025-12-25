"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CodeBackground } from "@/components/art/CodeBackground"

export function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            <CodeBackground />

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-sm md:text-base font-medium tracking-wider text-muted-foreground mb-4 uppercase">
                        Frontend Engineer & Structure Designer
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                >
                    TATSUYA MINEGISHI
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-[600px] text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
                >
                    Weaving logic into art. <br className="hidden md:block" />
                    Designing structures that breathe with Zen simplicity.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button size="lg" className="h-12 px-8 text-base">
                        Check My Work
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                        Contact Me
                    </Button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    )
}
