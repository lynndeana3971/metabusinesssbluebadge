import React from 'react'
import AccountsCenter from '.'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Meta Verified: Get the Blue Check on Facebook'  ,
    icons: {
        icon: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
        apple: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
        shortcut: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
    },
    description: 'Get the verified badge for impersonation protection, direct support & exclusive features. Protect your brand & build confidence with new audiences.',
    openGraph: {
        images: 'https://i.postimg.cc/T2VjjyDm/succes.jpg',
        title: 'Meta Verified for businesses | Verify your business on Facebook',
        description: 'Get the verified badge for impersonation protection, direct support & exclusive features. Protect your brand & build confidence with new audiences.',
    },
    twitter: {
        images: 'https://i.postimg.cc/T2VjjyDm/succes.jpg',
        title: 'Meta Verified for businesses | Verify your business on Facebook',
        description: 'Get the verified badge for impersonation protection, direct support & exclusive features. Protect your brand & build confidence with new audiences.',
    }
}

const AcountsCenterPage = () => {
  return (
    <AccountsCenter />
  )
}

export default AcountsCenterPage