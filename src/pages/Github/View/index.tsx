import { Link, useParams } from 'react-router-dom';

import { useViewRepo } from '@/services/github.ts';

function Avatar({ user, id }: { user: string; id: string }) {
  const { data } = useViewRepo(user as string, id as string);
  return (
    <>
      <div>{data?.full_name}</div>
    </>
  );
}

export default function Index() {
  const { user, id } = useParams();
  const { data, isLoading, error } = useViewRepo(user as string, id as string);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <div>{data?.name}</div>
      <Link to="/examples">Examples</Link>
      <Avatar user={user as string} id={id as string} />
    </>
  );
}
