import useSWR from 'swr';

import { IRepo } from '@/types/github.ts';
import request from '@/utils/request.tsx';

export function useViewRepo(user: string, id: string) {
  const key: string = `/repos/${user}/${id}`;
  return useSWR<IRepo>(key, async (url: string) =>
    request.get(url).then((res) => res.data),
  );
}
