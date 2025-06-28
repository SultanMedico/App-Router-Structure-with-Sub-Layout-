This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
App Router Structure with Sub-Layout:

app/
├── layout.tsx         // Root Layout (e.g., for global navigation/footer)
├── page.tsx           // Home Page
├── about/
│   └── page.tsx       // About Page
└── blog/
    ├── layout.tsx     // Blog Sub-Layout (e.g., blog-specific sidebar, header)
    └── page.tsx       // Blog Home Page (index of blog posts)
    └── [slug]/
        └── page.tsx   // Individual Blog Post Page (dynamic route)


Explanation:

app/layout.tsx (Root Layout): This layout applies to all pages in your application. It's a good place for global navigation (like your main header), a global footer, and shared metadata.

app/page.tsx (Home Page): This page will use the app/layout.tsx.

app/about/page.tsx (About Page): This page will also use the app/layout.tsx.

app/blog/layout.tsx (Blog Sub-Layout): This layout applies only to routes within the /blog segment (e.g., /blog, /blog/my-first-post). It's nested inside the app/layout.tsx. You can put blog-specific navigation (e.g., categories, recent posts sidebar) or a different header/footer here.

app/blog/page.tsx (Blog Home Page): This page will use both app/layout.tsx and app/blog/layout.tsx.

app/blog/[slug]/page.tsx (Individual Blog Post): This page (a dynamic route for individual posts) will also use both app/layout.tsx and app/blog/layout.tsx.


        
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# App-Router-Structure-with-Sub-Layout-
