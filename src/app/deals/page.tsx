import UserTest from '@/components/UserTest';
import getPostMetadata from '@/helpers/getPostMetadata';
import PostPreview from '@/components/PostPreview';

export default function Deals() {
  const postMetadata = getPostMetadata('home');
  const postPreviews = postMetadata.map((post) => <PostPreview key={post.slug} {...post} />);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div key="test" className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {postPreviews}
      </div>
      {/* <button><Link href="/api/auth/login">Login</Link></button>
      <button><Link href="/api/auth/logout">Logout</Link></button> */}
      {/* @ts-expect-error Async Server Component */}
      <UserTest />
      <p>Deals PAge</p>
    </main>
  );
}
