// app/blog/layout.tsx
import Link from 'next/link';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <aside style={{ width: '200px', borderRight: '1px solid #eee', paddingRight: '1rem' }}>
        <h3>Blog Categories</h3>
        <nav>
          <ul>
            <li><Link href="/blog?category=nextjs">Next.js</Link></li>
            <li><Link href="/blog?category=typescript">TypeScript</Link></li>
            <li><Link href="/blog?category=webdev">Web Dev</Link></li>
          </ul>
        </nav>
        <h3 style={{ marginTop: '1.5rem' }}>Recent Posts</h3>
        <ul>
            <li><Link href="/blog/first-post">My First Post</Link></li>
            <li><Link href="/blog/nextjs-tips">Next.js Tips</Link></li>
        </ul>
      </aside>
      <section style={{ flexGrow: 1 }}>
        {children} {/* This is where blog pages (e.g., app/blog/page.tsx or app/blog/[slug]/page.tsx) will render */}
      </section>
    </div>
  );
}