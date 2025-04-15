import useSWR from 'swr';

import request from '@/utils/request.tsx';

export const useUser = (id: bigint) => {
  const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher);

  return {
    user: data,
    isLoading,
    isError: error,
  };
};
