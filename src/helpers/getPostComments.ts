import fs from 'fs';
import matter from 'gray-matter';
import { PostMetadata } from '../types/PostMetadata';

// IGNORE FOR NOW
const getPostComments = (pathSegment: string): PostMetadata[] => {
  const folder = `src/posts/${pathSegment}`;
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`src/posts/${pathSegment}/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', '')
    };
  });

  return posts;
};

export default getPostComments;
