// app/layout.tsx
import './globals.css'; // Your global styles

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: '#eee', padding: '1rem', borderBottom: '1px solid #ddd' }}>
          <nav>
            <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </nav>
        </header>
        <main style={{ padding: '2rem' }}>
          {children} {/* This is where your page content or sub-layouts will be rendered */}
        </main>
        <footer style={{ background: '#eee', padding: '1rem', borderTop: '1px solid #ddd', marginTop: '2rem' }}>
          <p>&copy; {new Date().getFullYear()} Sultan's Next.js App</p>
        </footer>
      </body>
    </html>
  );
}



