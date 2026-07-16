"use client";

import { useState } from 'react';
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
}

export default function BlogIndex({ posts }: { posts: Post[] }) {
  const [activeTag, setActiveTag] = useState('All');
  
  const tags = ['All', ...Array.from(new Set(posts.map(p => p.tag)))];
  
  const filteredPosts = activeTag === 'All' 
    ? posts 
    : posts.filter(p => p.tag === activeTag);

  return (
    <>
      <div className="filters">
        {tags.map(tag => (
          <button 
            key={tag} 
            className={`filter-btn ${activeTag === tag ? 'active' : ''}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {filteredPosts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="b-card">
            <div className="b-body">
              <div className="b-tag">{`// ${post.tag}`}</div>
              <div className="b-title">{post.title}</div>
              <div className="b-excerpt">{post.excerpt}</div>
              <div className="b-date">{post.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
