import { ClientHome } from "@/components/ClientHome"
import { getBlogPosts } from "@/lib/blog"

export default function Home() {
  const posts = getBlogPosts()

  return <ClientHome posts={posts} />;
}
