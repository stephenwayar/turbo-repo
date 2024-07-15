"use client"
import '@mantine/core/styles.css';
import "./globals.css";
import { favicon } from '@repo/ui'
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Web App</title>
        <link rel="icon" href={favicon.src} type="image/x-icon" />
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>

      <body>
        <MantineProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
