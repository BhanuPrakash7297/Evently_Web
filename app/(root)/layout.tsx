import Navbar from '@/components/Navbar'
import React, { ReactNode } from 'react'

export default function RootLayout({children}:{children:ReactNode}){
  return (
    <div>
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}


