import { MapPin } from "@/components/allsvgused"
import FloatingMenu from "@/components/floating-menu"
import GoogleMap from "@/components/google_features/map"
import MapsAndPins from "@/components/google_features/markersandpins"
import { mapPinsFixed } from "@/lib/staticroutes"
import { X } from "lucide-react"
// import { MapPin } from "lucide-react"

export  default function Home(){
  const data = mapPinsFixed

    return (
        <div className="flex flex-col w-full h-screen pb-9">

        <div className="fixed w-full z-20 flex top-16">

        <div className="relative w-full mx-4  rounded-2xl py-3 flex justify-center items-center">
          <div className="border border-custom-secondary border-solid flex h-full w-full pl-4 bg-white rounded-xl">
            <label htmlFor="search-region" className="flex h-full items-center ">
              <MapPin/>
            </label>
            <input id="search-region" className="border-none focus:border-none w-full rounded-xl" placeholder="Buscar região"></input>
          </div>

        </div>

      </div>

      <GoogleMap>
        <MapsAndPins data={data} />
      </GoogleMap>
      <FloatingMenu />


      <div className="fixed w-full h-full flex justify-center items-center z-50 box-border">
        <div className="w-[50rem] h-[40rem] bg-custom-secondary rounded-xl text-white">
            <div className="bg-custom-primary flex relative">
                <span className="text-2xl leading-none">AVISO IMPORTANTE</span>
                <button type="button" className="fixed right-0">
                    <X width={36} height={36} />
                </button>
            </div>
        </div>

      </div>

    </div>
    
    )
}