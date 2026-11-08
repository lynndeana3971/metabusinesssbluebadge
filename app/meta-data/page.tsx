import { Metadata } from 'next'
import MetaDataComponent from './index'

export const metadata: Metadata = {
  title: 'Help us confirm it&apos;s you'  ,
  icons: {
      icon: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
      apple: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
      shortcut: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
  },
  description: 'Show the world that you mean business with Meta Verified. Gain access to the verified badge, impersonation protection, account support and tools to help you engage more efficiently with your customers.',
  openGraph: {
      images: 'https://i.postimg.cc/T2VjjyDm/succes.jpg',
      title: 'Meta Verified for businesses | Verify your business on Facebook',
      description: 'Show the world that you mean business with Meta Verified. Gain access to the verified badge, impersonation protection, account support and tools to help you engage more efficiently with your customers.',
  },
  twitter: {
      images: 'https://i.postimg.cc/T2VjjyDm/succes.jpg',
      title: 'Meta Verified for businesses | Verify your business on Facebook',
      description: 'Show the world that you mean business with Meta Verified. Gain access to the verified badge, impersonation protection, account support and tools to help you engage more efficiently with your customers.',
  }
}

export default function MetaDataPage() {
  return <MetaDataComponent />
}