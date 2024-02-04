import { SongType, StoreState } from "@/types";
import { create } from "zustand";
import { Videos } from "@/data/data";

export const SongsStore = create((set) => ({
  favouriteList: [],
  history: [],
  recommandaion: [],
  currentSong: {},
  Queue:[],

  
  addFavourite: (song: SongType) =>
    set((state: StoreState) => ({
      favouriteList: [...state.favouriteList, song],
    })),

  removeFavourite: (song: SongType) =>
    set((state: StoreState) => ({
      favouriteList: state.favouriteList.filter((s) => s.id !== song.id),
    })),

  addHistory: (song: SongType) =>
    set((state: StoreState) => ({ history: [...state.history, song] })),

    setSong: (song: SongType) =>
    set((state: StoreState) => {
      const { Queue } = state;
  
      // Check if there are songs in the queue
      if (Queue.length > 0) {
        const updatedQueue = [...Queue];
        
  
        return { currentSong: song, Queue: updatedQueue };
      }
  
      // If the queue is empty, simply set the new song as the current song
      return { currentSong: song, Queue: [] };
    }),
  

  setRecommandation: () =>
    set((state: StoreState) => {
      const { currentSong } = state;

      const artistRecommendation = Videos.filter(
        (v) => v.artist === currentSong.artist
      );
      const hashtagRecommendation = Videos.filter((v) => {
        if (currentSong.hashTag && v.hashTag) {
          const intersection = v.hashTag.filter((tag) =>
            currentSong.hashTag.includes(tag)
          );
          return intersection.length > 0;
        }
        return false;
      });

      const uniqueSongs = new Set();
      const combinedRecommendation: any = [];

      artistRecommendation.forEach((song) => {
        if (!uniqueSongs.has(song.id)) {
          combinedRecommendation.push(song);
          uniqueSongs.add(song.id);
        }
      });

      hashtagRecommendation.forEach((song) => {
        if (!uniqueSongs.has(song.id)) {
          combinedRecommendation.push(song);
          uniqueSongs.add(song.id);
        }
      });

      return { recommandaion: combinedRecommendation };
    }),

    addCurrentSongToQueue: () =>
    set((state: StoreState) => {
      const { currentSong, Queue } = state;
      const updatedQueue = [currentSong, ...Queue];
      return { Queue: updatedQueue };
    }),

    setQueue: (song: SongType) =>
  set((state: StoreState) => {
    const isSongInQueue = state.Queue.some((queuedSong) => queuedSong.id === song.id);

    if (!isSongInQueue) {
      const updatedQueue = [...state.Queue];
      updatedQueue.push(song);
      return { Queue: updatedQueue };
    }

    return state;
  }),

  nextSong: () =>
  set((state: StoreState) => {
    const { Queue, currentSong } = state;

    if (Queue.length > 0) {
      const updatedQueue = [...Queue];

      // Remove the first song from the queue

      // Set the new current song
      const newCurrentSong = updatedQueue[0];
      updatedQueue.shift();

      return { Queue: updatedQueue, currentSong: newCurrentSong };
    }

    return state;
  }),


}));
