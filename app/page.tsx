"use client";
import { useState } from "react";
import { videos } from "@/data/videos";
import VideoCard from '@/components/VideoCard'

export default function Home() {
  const [muted, setMuted] = useState(true);
  return (
    <div 
      className="
        h-screen
        overflow-y-scroll
        snap-y
        snap-mandatory
        scrollbar-hide
      "
    >
      {videos.map((video)=>(
        <VideoCard key={video.id} video={video} isActive={video.id} setMuted={setMuted} muted={muted}/>
      ))}
    </div>
  );
}
