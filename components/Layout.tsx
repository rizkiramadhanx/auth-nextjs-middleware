import React from 'react';

type TLayout = {
  children: React.ReactNode;
  logout: () => void;
};
const Layout = ({ children, logout }: TLayout) => {
  return (
    <>
      <nav className="h-16 bg-sky-900 items-center flex justify-center">
        <div className="flex justify-between items-center container p-10 text-white">
          <div className="text-xl font-bold">Auth Next JS</div>
          <button
            className="font-medium px-2 py-1 rounded-md bg-red-600"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
