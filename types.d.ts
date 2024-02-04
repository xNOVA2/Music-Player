


export interface SongType{
    id:number;
    title:string;
    video:string;
    artist:string;
    isFav:boolean;
    progress:number;
    poster:string;
    hashTag:string[]
}

export interface StoreState {
    bears: number;
    favouriteList: SongType[];
    history: SongType[];
    recommandaion: SongType[];
    addFavourite:(state:SongType)=>void;
    removeFavourite:(state:SongType)=>void
    addHistory:(state:SongType)=>void
    currentSong:SongType
    setSong:(state:SongType)=>void
    setRecommandation:()=>void
    Queue:SongType[]
        addCurrentSongToQueue: () => void
        setQueue:(song:SongType)=>void
        nextSong:()=>void
}