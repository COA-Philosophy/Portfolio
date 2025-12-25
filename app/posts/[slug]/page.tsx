import { getPostBySlug, getBlogPosts } from "@/lib/blog"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { notFound } from "next/navigation"

// Typings for Next.js 15+ Params
type Props = {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const posts = getBlogPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params
    const post = getPostBySlug(slug)
    if (!post) {
        return {
            title: "Post Not Found",
        }
    }
    return {
        title: `${post.title} | TATSUYA MINEGISHI`,
        description: post.description,
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="container max-w-3xl mx-auto px-4 py-24 md:py-32">
            <Link
                href="/#blog"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
            </Link>

            <article>
                <header className="mb-12">
                    <div className="flex gap-2 mb-4">
                        {post.tags.map(tag => (
                            <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>
                    <time className="text-muted-foreground font-mono">{post.date}</time>
                </header>

                <div className="prose prose-zinc dark:prose-invert max-w-none">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </article>
        </div>
    )
}
