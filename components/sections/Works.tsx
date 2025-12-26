import { SectionHeading } from "@/components/shared/SectionHeading"
import { ProjectCard } from "@/components/shared/ProjectCard"

const projects = [
    {
        title: "STRUCTURE DESIGNER",
        description: "人間には、不可能な診断。四柱推命・算命学・易学・西洋占星術・数秘術、そして心理学のビッグファイブ理論——6つの体系を同時に計算し、矛盾ごと統合できるのはAIだけ。さらに、あなたとの全対話を解析。言葉のパターンから「本当の構造」を導き出します。",
        tags: ["Next.js", "Gemini API", "Supabase"],
        image: "/images/structure-designer.png",
        link: "/works/structure-designer"
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
