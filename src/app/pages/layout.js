import React from 'react';
import Header from '../../components/DesktopNavbar';
import Footer from '../../components/abovefooter';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;