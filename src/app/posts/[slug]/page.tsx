import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '../../../helpers/getPostMetadata';
import Comments from '@/components/Comments';

const getPostContent = (slug: string) => {
  const folder = 'src/posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug
  }));
};

export const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="mx-auto  max-w-2xl px-6 py-11">
      <div className="my-12 text-center">
        {/* text-slate-600 */}
        <h1 className="text-2xl ">{post.data.title}</h1>
        {/* text-slate-400  */}
        <p className=" mt-2">{post.data.date}</p>
      </div>

      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
      {/* @ts-expect-error Async Server Component */}
      <Comments />
    </div>
  );
};
