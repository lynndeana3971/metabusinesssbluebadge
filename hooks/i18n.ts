import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../public/language/en.json';
import th from '../public/language/th.json';
import he from '../public/language/he.json';
import fr from '../public/language/fr.json';
import es from '../public/language/es.json';
import tw from '../public/language/tw.json';
import il from '../public/language/il.json';
import ua from '../public/language/ua.json';
import hu from '../public/language/hu.json';
import pl from '../public/language/pl.json';
import jp from '../public/language/jp.json';
import kr from '../public/language/kr.json';

i18n
    .use({
        type: 'languageDetector',
        async: false,
        init: function () { },
        detect: function () {
            try {
                if (typeof window === 'undefined') return undefined;
                const ls = window.localStorage;
                const k = '__i18n_ls_test__';
                ls.setItem(k, '1');
                ls.removeItem(k);
                return undefined;
            } catch {
                return (typeof navigator !== 'undefined' && navigator.language) ? navigator.language : 'en';
            }
        },
        cacheUserLanguage: function () { },
    } as any)

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            th: { translation: th },
            he: { translation: he },
            fr: { translation: fr },
            es: { translation: es },
            mx: { translation: es },
            gt: { translation: es },
            tw: { translation: tw },
            il: { translation: il },
            gr: { translation: il },
            ua: { translation: ua },
            hu: { translation: hu },
            pl: { translation: pl },
            jp: { translation: jp },
            kr: { translation: kr },
        },
        fallbackLng: 'en',
        supportedLngs: ['en', 'th', 'he', 'fr', 'es', 'tw', 'il', 'mx', 'gt', 'gr', 'ua', 'hu', 'pl', 'jp', 'kr'],
        nonExplicitSupportedLngs: true,
        detection: {
            order: ['navigator'],
            caches: [],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
