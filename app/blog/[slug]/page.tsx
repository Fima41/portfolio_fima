import { getPostData, getSortedPostsData, postExists } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!postExists(slug)) return {};
  const postData = await getPostData(slug);
  return {
    title: `${postData.title} — Fima Sichone`,
    description: postData.excerpt,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!postExists(slug)) {
    notFound();
  }

  const postData = await getPostData(slug);

  return (
    <main className="article-container">
      <Link href="/blog" className="back-link">← back to blog</Link>

      <header className="post-header">
        <span className="post-tag">// {postData.tag}</span>
        <h1 className="post-title">{postData.title}</h1>
        <div className="post-date">{postData.date}</div>
      </header>

      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </main>
  );
}
