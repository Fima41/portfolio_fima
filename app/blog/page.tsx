import { getSortedPostsData } from '@/lib/posts';
import BlogIndex from '@/components/BlogIndex';

export const metadata = {
  title: 'Blog — Fima Sichone',
  description: 'Writing on climate science, data pipelines, and machine learning for Africa.',
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();
  
  return (
    <section className="section">
      <div className="section-prefix">{'// technical_writing'}</div>
      <h2 className="section-title">Climate, Data &amp; Systems</h2>
      
      <BlogIndex posts={allPostsData} />
    </section>
  );
}
