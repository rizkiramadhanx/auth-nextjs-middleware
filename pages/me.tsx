import { useRouter } from 'next/router';
import React from 'react';

import Layout from '../components/Layout';
import { useLogout } from '../hooks/useLogout';
import { useProfile } from '../hooks/useProfile';

const Me = () => {
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
        <h1 className="text-3xl font-semibold">My Profile :</h1>
        {isSuccess && (
          <ul className="text-xl font-medium mt-2">
            <li>
              🆔
              <i className="font-medium">ID : {data.user._id}</i>
            </li>
            <li>
              🐻
              <i className="font-medium">Username : {data.user.username}</i>
            </li>
            <li>
              📩
              <i className="font-medium">Email : {data.user.email}</i>
            </li>
            <li>
              🔑
              <i className="font-medium">Password : {data.user.password}</i>
            </li>
          </ul>
        )}
      </div>
    </Layout>
  );
};
export default Me;
