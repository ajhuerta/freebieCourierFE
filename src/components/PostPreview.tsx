import Link from 'next/link';
import { PostMetadata } from '../types/PostMetadata';
import Image from 'next/image';

const contentFolderMap = {
  freebies: 'freebies',
  deals: 'deals',
  giveaways: 'giveaways',
  guides: 'guides'
};
const PostPreview = (props: PostMetadata, pathSegment: string) => {
  return (
    <div
      className="border border-slate-300 p-3 rounded-md shadow-sm
    bg-white max-w-32 max-h-72"
    >
      <Link href={`/posts/${props.slug}`}>
        <Image className="" src={'/guide-image.jpeg'} width={200} height={50} alt="image" />
        <p className="text-sm text-slate-400">{props.date}</p>
        <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
      </Link>

      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
