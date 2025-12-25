import { SectionHeading } from "@/components/shared/SectionHeading"

export function About() {
    return (
        <section id="about" className="py-24 md:py-32 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <SectionHeading title="About Me" subtitle="Who is behind the structure?" />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            <strong className="text-foreground">Frontend Engineer</strong> turned <strong className="text-foreground">Structure Designer</strong>.
                        </p>
                        <p>
                            I don't just write code; I design systems that feel organic. My background in visual design allows me to bridge the gap between "Logic" and "Emotion".
                        </p>
                        <p>
                            Currently focusing on the intersection of AI and human creativity, building platforms that empower users to find their own structures.
                        </p>
                    </div>
                    <div className="relative aspect-square md:aspect-[4/3] bg-muted rounded-2xl overflow-hidden border border-border/50 flex items-center justify-center">
                        {/* Image Placeholder */}
                        <span className="text-muted-foreground/50 font-mono text-sm">[Profile Photo Placeholder]</span>
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    )
}
