"use client";

import { RefObject, useEffect } from "react";

export default function useAutoPlay(videoRef: RefObject<HTMLVideoElement | null>) {
    useEffect(()=>{
        const video = videoRef.current;

        if(!video) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        },
        {
            threshold:0.8,
        }
        );
        observer.observe(video);
        return () => {
            observer.unobserve(video);
            observer.disconnect();
        }
    },[videoRef])
    return ;
}