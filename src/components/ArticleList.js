import React from 'react';
import Article from './Article';

const ArticleList = ({ posts }) => {
  // Check if posts is not an array or is empty
  if (!Array.isArray(posts) || posts.length === 0) {
    return <p>No articles to display</p>;
  }

  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
      ))}
    </main>
  );
}

export default ArticleList;