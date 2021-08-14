import React from 'react';

interface ILayoutProps {
  header: React.ReactElement;
  body: React.ReactElement;
}

const Layout: React.FC<ILayoutProps> = ({ header, body }) => (
  <div className="pt-5 container px-5 min-h-screen">
    <header>
      <h1 className="text-3xl text-center font-bold">{header}</h1>
    </header>
    <main className="mt-10">{body}</main>
  </div>
);

export default Layout;
