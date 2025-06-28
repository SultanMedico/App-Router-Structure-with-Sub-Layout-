// app/blog/[slug]/page.tsx
import Link from 'next/link';

// Define the type for the props received by dynamic routes
interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  // In a real application, you would fetch blog post data based on the slug
  // For demonstration, we'll just display the slug.

  return (
    <div>
      <h1>Blog Post: {slug.replace(/-/g, ' ').toUpperCase()}</h1>
      <p>This is the content for the blog post titled "{slug}".</p>
      <p>
        In a real application, you'd fetch content from a CMS or database here.
      </p>
      <Link href="/blog">
        &larr; Back to all blog posts
      </Link>
    </div>
  );
}