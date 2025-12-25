import { SectionHeading } from "@/components/shared/SectionHeading"
import { Badge } from "@/components/ui/badge"

const skills = [
    { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"] },
    { category: "Backend / Infra", items: ["Supabase", "Node.js", "Vercel", "AWS (Basic)"] },
    { category: "Design", items: ["Figma", "UI/UX Architecture", "Adobe Creative Suite"] },
    { category: "Others", items: ["Git", "Docker", "Agile", "Zen Philosophy"] }
]

export function Skills() {
    return (
        <section id="skills" className="py-24 md:py-32">
            <div className="container px-4 md:px-6">
                <SectionHeading title="Skills" subtitle="My technical arsenal." />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((group) => (
                        <div key={group.category} className="space-y-4">
                            <h3 className="text-xl font-semibold border-b pb-2">{group.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
