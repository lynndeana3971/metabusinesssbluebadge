'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function MetaFeature() {
    const { t } = useTranslation();

    const FEATURES = [
        {
            title: t('verified_benefits.verified_badge.title'),
            description: t('verified_benefits.verified_badge.description'),
            image: '/images/meta/verified-badge.jpg',
        },
        {
            title: t('verified_benefits.impersonation_protection.title'),
            description: t('verified_benefits.impersonation_protection.description'),
            image: '/images/meta/impersonation.jpg',
        },
        {
            title: t('verified_benefits.enhanced_support.title'),
            description: t('verified_benefits.enhanced_support.description'),
            image: '/images/meta/enhanced-support.jpg',
        },
        {
            title: t('verified_benefits.upgraded_profile_features.title'),
            description: t('verified_benefits.upgraded_profile_features.description'),
            image: '/images/meta/profile-features.jpg',
        },
    ]

    const [active, setActive] = useState(FEATURES[0])
    const [isTransitioning, setIsTransitioning] = useState(false)

    /* mobile slider */
    const sliderRef = useRef<HTMLDivElement | null>(null)
    const [index, setIndex] = useState(0)

    const scrollToIndex = (i: number) => {
        if (!sliderRef.current) return
        const width = sliderRef.current.clientWidth
        sliderRef.current.scrollTo({
            left: width * i,
            behavior: 'smooth',
        })
        setIndex(i)
    }

    useEffect(() => {
        const el = sliderRef.current
        if (!el) return

        const onScroll = () => {
            const width = el.clientWidth
            const i = Math.round(el.scrollLeft / width)
            setIndex(i)
        }

        el.addEventListener('scroll', onScroll)
        return () => el.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div className="max-w-[1440px] mx-auto md:pt-20 pt-0 md:px-6 px-3">
            <h1 className="text-[32px] md:mb-7 mb-2 text-center">{t('verified_benefits.title')}</h1>

            {/* ================= DESKTOP ================= */}
            <div className="md:grid hidden grid-cols-12 gap-16 items-stretch">

                <div className="col-span-6 border-t">
                    {FEATURES.map((item) => (
                        <div
                            key={item.title}
                            onMouseMove={() => {
                                if (active.title !== item.title) {
                                    setIsTransitioning(true)
                                    setTimeout(() => {
                                        setActive(item)
                                        setIsTransitioning(false)
                                    }, 200)
                                }
                            }}
                            className={`py-6 cursor-pointer border-b
                                ${
                                    active.title === item.title
                                        ? 'text-[#1c2b33]'
                                        : 'text-gray-500 hover:text-black'
                                }`}
                        >
                            <h3 className="text-[28px] font-[500] flex justify-between">
                                {item.title}
                                <img
                                    src={
                                        active.title === item.title
                                            ? '/images/icons/ic_apart.svg'
                                            : '/images/icons/ic_plus.svg'
                                    }
                                    className="w-8 h-8"
                                />
                            </h3>

                            {active.title === item.title && (
                                <p className="py-6 text-gray-600 max-w-md">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="col-span-6">
                    <div className="aspect-[0.8] rounded-2xl overflow-hidden">
                        <img
                            src={active.image}
                            alt={active.title}
                            className={`w-full h-full object-cover transition-all duration-700
                                ${
                                    isTransitioning
                                        ? 'opacity-0 scale-110 translate-x-4'
                                        : 'opacity-100 scale-100'
                                }`}
                        />
                    </div>
                </div>
            </div>

            {/* ================= MOBILE SLIDER ================= */}
            <div className="md:hidden relative">
                {/* SLIDER */}
                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
                >
                    {FEATURES.map((item) => (
                        <div
                            key={item.title}
                            className="min-w-full w-full snap-center px-1"
                        >
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h3 className="text-[24px] font-[500]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-gray-600">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="aspect-[0.9] rounded-2xl overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* PAGINATION */}
                <div className="flex items-center justify-center gap-4 mt-6">
                    <button
                        onClick={() => scrollToIndex(Math.max(index - 1, 0))}
                        className="w-9 h-9 rounded-full border flex items-center justify-center"
                    >
                        ‹
                    </button>

                    <div className="flex gap-2">
                        {FEATURES.map((_, i) => (
                            <span
                                key={i}
                                className={`w-2 h-2 rounded-full transition
                                    ${
                                        i === index
                                            ? 'bg-[#1c2b33]'
                                            : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() =>
                            scrollToIndex(
                                Math.min(index + 1, FEATURES.length - 1)
                            )
                        }
                        className="w-9 h-9 rounded-full border flex items-center justify-center"
                    >
                        ›
                    </button>
                </div>
            </div>
        </div>
    )
}
