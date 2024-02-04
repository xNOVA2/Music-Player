import Feature from "@/components/Feature";
import Review from "@/components/Review";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import News from "@/components/newsLetter";
import Statustic from "@/components/statistic";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 h-screen">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans lg:text-7xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Sonic Canvas
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                SonicCanvas, where melodies unfold, A realm of rhythms, a tale
                untold. Brush strokes of sound, a vibrant display, In the canvas
                of music, emotions sway.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
          <Button variant={"outline"} className=""><Music size={15} className="mr-2"/> Dashboard </Button>
          <Button variant={"outline"} className=""><Music size={15} className="mr-2"/> Start Free Trial </Button>

          </div>
          
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <Image
            className=" rounded shadow-lg lg:rounded-none lg:shadow-none"
            src="https://tidal.com/_nuxt/img/ui5.ddf3c43.png"
            width={800}
            height={300}
            alt="Sonic Canvas"
          />
        </div>
      </div>
      <Feature/>
    <Review/>
    <Statustic/>
    <News/>
    <Footer/>
    </div>
  );
}
