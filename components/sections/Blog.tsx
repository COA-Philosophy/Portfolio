import Link from "next/link"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/blog"

interface BlogProps {
    posts: BlogPost[]
}

export function Blog({ posts }: BlogProps) {
    return (
        <section id="blog" className="py-24 md:py-32">
            <div className="container px-4 md:px-6">
                <SectionHeading title="Blog" subtitle="Thoughts on structure and chaos." />

                {posts.length === 0 ? (
                    <p className="text-muted-foreground text-center">No posts found yet.</p>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/posts/${post.slug}`} className="block group">
                                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-md">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-2">
                                            <time className="text-xs text-muted-foreground font-mono">{post.date}</time>
                                        </div>
                                        <CardTitle className="group-hover:text-primary transition-colors text-xl">
                                            {post.title}
                                        </CardTitle>
                                        <CardDescription className="line-clamp-2">
                                            {post.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map(tag => (
                                                <Badge key={tag} variant="secondary" className="text-xs font-normal">#{tag}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
