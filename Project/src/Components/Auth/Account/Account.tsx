import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../../../api/queryClient';
import { Loader } from '../../../ui/Loader';
import { AuthForm } from '../AuthForm';
import { fetchUser } from '../../../api/user';
import { AccountPage } from '../../../pages';

export const Account = () => {
  const meQuery = useQuery(
    {
      queryFn: () => fetchUser(),
      queryKey: ['koa.sess'],
      retry: false,
    },
    queryClient
  );

  switch (meQuery.status) {
    case 'pending':
      return <Loader />
    case 'success':
      return (
        <AccountPage />
      )
    case 'error':
      return <AuthForm />
  }
}
