import { useRouter } from 'next/router';
import Layout from '../components/Layout';

import { useLogout } from '../hooks/useLogout';
import { useProfile } from '../hooks/useProfile';

const Dashboard = () => {
  const { data, isSuccess } = useProfile();
  const { mutate } = useLogout();

  const router = useRouter();

  const handleClick = () => {
    mutate(undefined, {
      onSuccess: () => {
        router.replace('/login');
      },
    });
  };

  return (
    <Layout logout={handleClick}>
      <div className="container px-10 mt-10">
        <h1 className="text-3xl font-semibold">
          Hello, {isSuccess && data.user.username} 😎😎
        </h1>
        <p className="text-xl font-medium mt-2">Everything is good right ?</p>
      </div>
    </Layout>
  );
};

export default Dashboard;
