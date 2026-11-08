import { Head, Html, Main, NextScript } from 'next/document'

/**
 * This file exists to satisfy Next.js when it checks for `/_document`.
 * The app primarily uses the App Router (`/app`), so this Document is a safe,
 * minimal fallback and won't affect App Router rendering.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

