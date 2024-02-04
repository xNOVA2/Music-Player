import ArtistCard from "@/components/Artise";
import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import {Videos} from '@/data/data'
export default function page() {
  return (
    <div className="bg-white min-h-screen">
      <Sidebar />
      <div className="ml-64 p-3">
        <h1 className="text-4xl mb-5 font-bold font-sans">Browse Music</h1>
        <div className="flex gap-2">
          
            {Videos.slice(0, 5).map((video)=>(
              <Card video={video} key={video.id}/>
            
            ))}
        </div>
      </div>

      <div className="ml-64 p-3">
        <h1 className="text-4xl mb-5 font-bold font-sans ">Popular Songs</h1>
        <div className="flex gap-2">
        {Videos.slice(5, 9).map((video)=>(
              <Card video={video} key={video.id}/>
            ))}
         
        </div>
      </div>
      <div className="ml-64 p-3">
        <h1 className="text-4xl mb-5 font-bold font-sans ">Popular Artist</h1>
        <div className="flex gap-3">

        <ArtistCard artistName="Shub singh" songTitle="Devil" imageUrl="https://fameimpact.com/wp-content/uploads/2022/09/Shubh-Singer-Wiki-1.png"/>
        <ArtistCard artistName="Young Stunner" songTitle="Devil" imageUrl="https://tse4.mm.bing.net/th?id=OIP.2juAuVcUkfpQLwRDVK7X2wHaHa&pid=Api&P=0&h=220"/>
        </div>

        </div>
    </div>
  );
}
