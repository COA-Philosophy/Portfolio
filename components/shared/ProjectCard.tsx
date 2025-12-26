import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
    image?: string
    link?: string
}

export function ProjectCard({ title, description, tags, image, link }: ProjectCardProps) {
    return (
        <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-md">
            <div className="aspect-video bg-muted relative overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-mono text-xs">
                        [Project Image: {title}]
                    </div>
                )}
                <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/5" />
            </div>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    {title}
                </CardTitle>
                <CardDescription className="line-clamp-2 mt-2">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                {link && (
                    <Button asChild variant="ghost" size="sm" className="w-full group/btn">
                        <Link href={link} {...(link.startsWith('/') ? {} : { target: "_blank" })}>
                            View Project
                            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}
