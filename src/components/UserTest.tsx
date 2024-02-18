import { getSession, Session } from '@auth0/nextjs-auth0';

export default async function UserTest() {
  const { user }: any = (await getSession()) || false;

  return (
    user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
