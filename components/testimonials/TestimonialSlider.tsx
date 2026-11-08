"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Testimonial {
    content: string;
    name: string;
}

export default function TestimonialSlider() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selected, setSelected] = useState(0);

    const { t } = useTranslation();

    const data: Testimonial[] = [
        {
            content: t('testimonial_slider.testimonial_1.description'),
            name: t('testimonial_slider.testimonial_1.name'),
        },
        {
            content: t('testimonial_slider.testimonial_2.description'),
            name: t('testimonial_slider.testimonial_2.name'),
        },
        {
            content: t('testimonial_slider.testimonial_3.description'),
            name: t('testimonial_slider.testimonial_3.name'),
        },
    ];

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <div className="max-w-[1440px] mx-auto md:px-6 px-3 mb-[80px]">
            <p className='text-center md:text-[32px] text-[24px] mb-10'>{t('testimonial_slider.title')}</p>
            <div className="bg-[#f1f4f7] overflow-hidden rounded-[24px]" ref={emblaRef}>
                <div className="flex">
                    {data.map((item, i) => (
                        <div
                            key={i}
                            className="flex-[0_0_100%] py-20 md:px-20 px-4"
                        >
                            <div className="text-center h-full flex flex-col justify-center items-center">
                                <p className="md:text-[24px] text-[17px] font-[300] mb-8">“{item.content}”</p>
                                <p className="md:text-[18px] text-[15px] font-helvetica font-[100] md:px-[25%] px-4">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Row */}
            <div className="flex items-center justify-center gap-8 mt-6">
                <button
                    onClick={() => emblaApi?.scrollPrev()}
                    className="w-[32px] h-[32px] md:block hidden"
                >
                    <img src="/images/icons/ic_left.svg" alt="left" className="w-[32px] h-[32px]" />
                </button>

                <div className="flex gap-2">
                    {data.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => emblaApi?.scrollTo(i)}
                            className={`w-[10px] h-[10px] rounded-full ${selected === i
                                    ? "bg-gray-900"
                                    : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={() => emblaApi?.scrollNext()}
                    className="w-[32px] h-[32px] md:block hidden"
                >
                    <img src="/images/icons/ic_right.svg" alt="right" className="w-[32px] h-[32px]" />
                </button>

            </div>
        </div>
    );
}
