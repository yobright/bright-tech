import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Layout({ children}) {
  console.log('oo')
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout