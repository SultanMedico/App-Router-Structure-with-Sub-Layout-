// app/about/page.tsx
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <h1>About Sultan Ahmed</h1>
      <p>This page provides information about our company and mission.</p>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Back to Home
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Check out our Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}