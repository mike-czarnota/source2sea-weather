import React from 'react';

interface ILayoutProps {
  header: React.ReactElement;
  body: React.ReactElement;
}

const Layout: React.FC<ILayoutProps> = ({ header, body }) => (
  <div className="p-5 container mx-auto min-h-screen">
    <div className="md:w-5/6 mx-auto xl:w-full">
      <header>
        <h1 className="text-3xl text-center font-bold">{header}</h1>
      </header>
      <main className="mt-10 xl:mt-20">{body}</main>
    </div>
  </div>
);

export default Layout;
