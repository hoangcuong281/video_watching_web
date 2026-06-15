"use client"
import {useState, useRef } from 'react';
import { Video } from '@/types/video';
import { Heart, MessageCircle, Share, Volume2, VolumeOff, Pause } from "lucide-react";
import useAutoPlay from '@/hooks/useAutoPlay';

type VideoCardProps = {
  video: Video;
  isActive: number;
  muted: boolean;
  setMuted: React.Dispatch<React.SetStateAction<boolean>>;
};


export default function VideoCard({video, muted, setMuted}: VideoCardProps) {
    
    const [isPaused, setIsPaused] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(video.likesCount);

    const togglePlay = () => {
        if(!videoRef.current) return ;

        if(videoRef.current.paused){
            videoRef.current.play();
            setIsPaused(false);
        }else{
            videoRef.current.pause();
            setIsPaused(true);
        }
    };

    const handleLike = () => {
        setLiked((prev) => !prev);
        setLikes((prev) => (liked ? prev - 1 : prev + 1));
    }

    useAutoPlay(videoRef);

    return (
        <div className='relative h-screen snap-start flex justify-center intems-center'>
            <video 
                ref={videoRef}
                className="flex w-full h-full"
                src={video.videoUrl}
                loop
                muted={muted}
                playsInline
                onClick={togglePlay}
            />
            <div className="absolute bottom-10 left-5 right-5 text-white flex justify-between items-end">
                <div className="">
                    <h3 className="font-bold">
                        @{video.authorName}
                    </h3>
                    <p>{video.description}</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <button onClick={handleLike}>
                        <Heart
                            fill={liked ? "red" : "none"}
                        />
                        <p>{likes}</p>
                    </button>
                    <button>
                        <MessageCircle />
                    </button>

                    <button>
                        <Share />
                    </button>
                    <button
                        className="rounded cursor-pointer"
                        onClick={() => setMuted(prev => !prev)}
                        >{muted ? <VolumeOff /> : <Volume2 />}
                    </button>
                </div>
            </div>
            {isPaused && <Pause className='absolute flex self-center' size={100} color='white'/>}
            
        </div>
    );
}