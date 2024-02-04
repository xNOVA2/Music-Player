'use client'
import Sidebar from "@/components/Sidebar";
import React, { useEffect, useRef, useState } from "react";
import {
  PlayCircle,
  Volume2,
  Heart,
  StepForward,
  ListEnd,
  Music,
  Play,
  PauseCircle,
  VolumeX,
} from "lucide-react";
import Image from "next/image";
import { Videos } from "@/data/data";
import { SongsStore } from "@/store/redux";
import { SongType, StoreState } from "@/types";
import List from "@/data/LinkedList";


export default function MusicPlayer({params}:{params:{id:string}}) {
  
  const FavList = SongsStore((state: unknown) => (state as StoreState).favouriteList);
  const currentSong = SongsStore((state: unknown) => (state as StoreState).currentSong);
  const addFavourite = SongsStore((state: unknown) => (state as StoreState).addFavourite);
  const removeFavourite = SongsStore((state: unknown) => (state as StoreState).removeFavourite);
  const addHistory = SongsStore((state: unknown) => (state as StoreState).addHistory);

  const Queue = SongsStore((state: unknown) => (state as StoreState).Queue);

 const VideoRef = useRef<HTMLVideoElement>(null)
  const [play, setplay] = useState(false);
  const [mute,setMute] = useState(false);

  
const StartPlaying = () =>{
  VideoRef.current?.play()

  setplay(true)
}

const handleStopPlaying = () =>{
  VideoRef.current?.pause()
  setplay(false)
}


const handleRecentlyPlayer = () =>{

  if(currentSong){
    addHistory(currentSong)
  }
}
const handleFavourite = () =>{

     
  if(FavList.find((videos)=>videos.id===currentSong?.id)){
    removeFavourite(currentSong!)
  }
  else{
    addFavourite(currentSong!)
  }
}

  const AddCurentSongToQueue = SongsStore((state: unknown) => (state as StoreState).addCurrentSongToQueue);
  const nextSong = SongsStore((state: unknown) => (state as StoreState).nextSong);
// useEffect(() => {
//   AddCurentSongToQueue()
// },[])
  return (

    

<div className="">
      <Sidebar />
      <div className="ml-64">
        <div className="w-full bg-slate-800 h-[600px] p-5 flex gap-5 ">
          <div className=" bg-gradient-to-r from-slate-500 to-sky-950  rounded-lg p-6 shadow-md max-w-sm flex justify-start flex-col">
            <div className="relative overflow-hidden rounded-lg h-96">
              <video
            muted={mute}
              ref={VideoRef}
              autoPlay={play}
                src={currentSong?.video}
                  onPlaying={handleRecentlyPlayer}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center"></div>
            </div>
            <div className="mt-4">
              <p className="text-white font-semibold text-lg">{currentSong?.title}</p>
              <p className="text-white text-sm">{currentSong?.artist}</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                {!play ? <PlayCircle className="text-white h-6 w-6 mr-2 cursor-pointer" onClick={StartPlaying}/> : <PauseCircle  onClick={handleStopPlaying} className="text-white h-6 w-6 mr-2 cursor-pointer" /> }
                {mute ? <VolumeX  color="#ffffff"  className="text-white h-6 w-6 cursor-pointer" onClick={()=>setMute(false)} /> : <Volume2 className="text-white h-6 w-6 cursor-pointer" onClick={()=>setMute(true)} />}
                <StepForward className="text-white h-6 w-6 cursor-pointer" onClick={()=>nextSong()} />
              </div>
              <Heart className={`text-red-500 h-6 w-6 mt-1 cursor-pointer ${FavList.find((videos)=>videos.id===currentSong?.id) ? 'fill-red-500' : ''}`} onClick={() => handleFavourite()}/>

            </div>
          </div>
                <div className="border-l-2 px-3 h-full   border-white">
                <div className="flex gap-3  justify-start items-center ">
                <h1 className="text-white text-3xl">Queue</h1>
          <ListEnd className="text-white "/>
          
                  </div>
                  <div className="flex flex-col w-full mt-2">
                    <div className="flex gap-2 flex-wrap ">
                      {Queue.map((video, index) => {
                        return (
                          <img src={video.poster} alt="" className="w-32 h-full" key={video.id}/>
                        );
                      })}
                    </div>
                  </div>
                </div>
        
        </div>
        <div className="p-3">
          <div className="flex gap-3 items-center justify-start">
            <h1 className="text-3xl ">Recommendation  </h1>
            <Music size={30} />
          </div>
        <Recommendation     />
        <div className="flex gap-3 items-center justify-start mt-4">
            <h1 className="text-3xl ">Popular Songs  </h1>
            <Music size={30} />
          </div>
        <PopularSongs/>
        </div>
        <div></div>
      </div>
    </div>
  );
}

    function Recommendation() {
      const addInToQueue = SongsStore((state: unknown) => (state as StoreState).setQueue);
      const setRecommend = SongsStore((state: unknown) => (state as StoreState).setRecommandation);
      const recommendation = SongsStore((state: unknown) => (state as StoreState).recommandaion);
      const setSong = SongsStore((state: unknown) => (state as StoreState).setSong);
      const PlaySong = (video:SongType) =>{
        List.setCurrentSong(video);
        setSong(List.getCurrentSong());
      }
      useEffect(() => {
        setRecommend()
      
        
      }, [])
    
      return (<div className="mt-4 flex gap-5 flex-wrap">
      {recommendation.map((imageUrl, index) => <div key={index} className="relative group">
          <Image src={imageUrl.poster} alt={`Picture ${index + 1}`} width={200} height={200} className="rounded-lg" />
          <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity  gap-3 mb-2">
            <button className=" bg-white p-2 rounded-md" onClick={()=>addInToQueue(imageUrl)}><ListEnd /></button>
            <div className="bg-white p-2 rounded-md cursor-pointer">
              <Play onClick={()=>PlaySong(imageUrl)}/>
            </div>
          </div>
        </div>)}
    </div>);
    }

    function PopularSongs() {
      const addInToQueue = SongsStore((state: unknown) => (state as StoreState).setQueue);

      const setSong = SongsStore((state: unknown) => (state as StoreState).setSong);
      const PlaySong = (video:SongType) =>{
        List.setCurrentSong(video);
        setSong(List.getCurrentSong());
      }
      return (
        <div className="mt-4 flex gap-5 flex-wrap">
          {Videos
            .sort(() => Math.random() - 0.5)
            .slice(0, 5)
            .map((_, index) => (
              <div key={index} className="relative group">
                <Image
                  src={Videos[index].poster}
                  alt={`Picture ${index + 1}`}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity  gap-3 mb-2">
                  <button className=" bg-white p-2 rounded-md"  onClick={()=>addInToQueue(_)}>
                    <ListEnd />
                  </button>
                  <div className="bg-white p-2 rounded-md cursor-pointer">
                    <Play onClick={()=>PlaySong(_)}/>
                  </div>
                </div>
              </div>
            ))}
        </div>
      );
    }
  