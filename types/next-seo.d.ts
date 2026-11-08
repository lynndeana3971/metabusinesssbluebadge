declare module 'next-seo' {
  import * as React from 'react'

  export interface NextSeoProps {
    title?: string
    description?: string
    canonical?: string
    openGraph?: Record<string, any>
    twitter?: Record<string, any>
    additionalMetaTags?: Array<Record<string, any>>
    additionalLinkTags?: Array<Record<string, any>>
    noindex?: boolean
    nofollow?: boolean
    // allow other props
    [key: string]: any
  }

  export const NextSeo: React.FC<NextSeoProps>

  export default NextSeo
}
