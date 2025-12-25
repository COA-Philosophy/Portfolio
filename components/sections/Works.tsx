import { SectionHeading } from "@/components/shared/SectionHeading"
import { ProjectCard } from "@/components/shared/ProjectCard"

const projects = [
    {
        title: "STRUCTURE DESIGNER",
        description: "An AI partner that accompanies you in complex fortune-telling and structural analysis. Bridging ancient wisdom with modern tech.",
        tags: ["Next.js", "OpenAI API", "Tailwind CSS"],
        link: "#"
    },
    {
        title: "Superb Bespoke",
        description: "A premium bespoke suit brand site. Delivering the essence of luxury and perfect fit through digital experience.",
        tags: ["React", "Framer Motion", "Supabase"],
        link: "#"
    },
    {
        title: "fragment structure",
        description: "A generative code art platform where users can explore the beauty of algorithms.",
        tags: ["WebGL", "Three.js", "Zustand"],
        link: "#"
    }
]

export function Works() {
    return (
        <section id="works" className="py-24 md:py-32 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <SectionHeading title="Selected Works" subtitle="Architecture of digital experiences." />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
