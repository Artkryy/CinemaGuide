import { FC } from 'react';
import { User } from '../../interfaces/User'
import './AccountPage.css'
import { AccountTabs } from '../../Components/AccountTabs';
import { Loader } from '../../ui/Loader';
import { useFavorites } from '../../hooks/useFavorites';


interface TAccountPageProps {
  user?: User | undefined;
  userLoad?: boolean;
}

export const AccountPage: FC<TAccountPageProps> = ({ user, userLoad }) => {
  const { data, isLoading } = useFavorites()


  if (userLoad || isLoading) {
    return <Loader />
  }

  if (user && data) {
    return (
      <section className='account-page'>
        <h1 className="account-page__title">Мой аккаунт</h1>
        <AccountTabs user={user} favorites={data} />
      </section>
    )
  }
}
