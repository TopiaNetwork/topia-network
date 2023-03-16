import './globals.css'
import { Providers } from '../components/providers'
import React from 'react'

export const metadata = {
  title: 'Topia - EVM Compatible Storage Layer2',
  description: 'EVM Compatible Storage Layer2',
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-[#070A0A] text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
