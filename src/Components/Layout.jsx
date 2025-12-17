




import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Navbar />

      <main className="pt-0 lg:pt-28">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
