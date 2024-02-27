import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ModalProvider } from '@/components/providers/modal-provider'
import { ConvexClientProvider } from '@/components/providers/convex-provider'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { EdgeStoreProvider } from '@/lib/edgestore'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Snapnote',
  description: 'A note taking app',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
        <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
        storageKey='Snapnote-theme-2'
        >
          <Toaster position='bottom-center' />
          <ModalProvider />
        {children}
        </ThemeProvider>
        </EdgeStoreProvider>
        </ConvexClientProvider>
        </body>
    </html>
  )
}