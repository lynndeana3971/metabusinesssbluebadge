'use client'

import "./globals.css"
import React from 'react';
import { Provider } from './provider'
import { optimisticFont } from './fonts';
import "react-phone-input-2/lib/style.css";
import { getUserLocation } from '@/libs/get-location';
import { setLocalStorage } from '@/helper/localstorage';
import { ColorModeScript, theme } from '@chakra-ui/react'
import disableDevtool from 'disable-devtool';
import "../hooks/i18n"
import { useTranslation } from 'react-i18next';

export default function Layout(props: { children: React.ReactNode }) {
  const colorMode = theme.config.initialColorMode
  const { i18n } = useTranslation();

  React.useEffect(() => {
    const fetchUserLocation = async () => {
      const location = await getUserLocation();
      const language = location?.country_code?.toLowerCase?.() || "en";

      setLocalStorage('location_user', location);
      i18n.changeLanguage(language).then();
    }

    fetchUserLocation();
    disableDevtool();
  }, []);

  return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5TGXPNEDCF"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5TGXPNEDCF');
          `
        }} />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
      </head>
      <body className={`chakra-ui-${colorMode} ${optimisticFont.variable}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}
