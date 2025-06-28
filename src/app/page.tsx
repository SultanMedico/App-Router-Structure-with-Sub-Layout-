// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of our application.</p>
      <nav>
        <ul>
          <li>
            <Link href="/about">
              Go to About Page
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Visit Our Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}