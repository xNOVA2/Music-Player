"use client";
// Card.tsx

import React, { FC, useState } from "react";
import { PlayCircle, Play, Heart } from "lucide-react";
import Link from "next/link";
import { SongsStore } from "@/store/redux";
import { SongType, StoreState } from "@/types";
import { useRouter } from "next/navigation";
import List from "@/data/LinkedList";
interface CardProps {
  // Add your props if needed
  video: SongType;
}

const Card: FC<CardProps> = ({ video }) => {
  const router = useRouter();
  const FavList = SongsStore(
    (state: unknown) => (state as StoreState).favouriteList
  );
  const addFavourite = SongsStore(
    (state: unknown) => (state as StoreState).addFavourite
  );
  const removeFavourite = SongsStore(
    (state: unknown) => (state as StoreState).removeFavourite
  );
  let setSong = SongsStore((state: unknown) => (state as StoreState).setSong);
  const [PlayButtonVisable, setPlayButtonVisable] = useState(false);

  const handleFavourite = () => {
    if (FavList.find((videos) => videos.id === video.id)) {
      removeFavourite(video);
    } else {
      addFavourite(video);
    }
  };

  const HandleRoute = () => {
    List.setCurrentSong(video);
    console.log(List.getCurrentSong());
    setSong(List.getCurrentSong());
    // console.log(setSong);
    
    router.push("/Music");
  };
  return (
    <div className="bg-white rounded-lg shadow-md w-64  ">
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setPlayButtonVisable(true)}
        onMouseLeave={() => setPlayButtonVisable(false)}
      >
        <Link href={`/Music`} onClick={HandleRoute}>
          <img
            src={video.poster}
            className="w-full h-40 object-cover rounded-md"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {PlayButtonVisable && (
              <Play className="text-white h-12 w-12 cursor-pointer" />
            )}
          </div>
        </Link>
      </div>
      <div className="px-4 pb-2">
        <div className="mt-4 flex justify-between">
          <div>
            <p className="text-gray-800 font-semibold text-lg">{video.title}</p>
            <p className="text-gray-500 text-sm">{video.artist}</p>
          </div>
          <Heart
            className={`text-red-500 h-6 w-6 mt-1 cursor-pointer ${
              FavList.find((videos) => videos.id === video.id)
                ? "fill-red-500"
                : ""
            }`}
            onClick={() => handleFavourite()}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
