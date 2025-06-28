import Link from 'next/link';

export default function BlogPage() {
    return (
        <div>
            <h1>Blog Page</h1>
            <p>Welcome to the blog page!</p>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    );
}