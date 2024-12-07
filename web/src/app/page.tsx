"use client"
import { MapPin } from "@/components/allsvgused";
import MapsAndPins from "@/components/google_features/markersandpins";
import { APIProvider, Map } from "@vis.gl/react-google-maps"

const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""


export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen mb-9">

      <div className="fixed w-full z-20 flex top-16">

        <div className="relative w-full mx-4  rounded-2xl py-3 flex justify-center items-center">
          <div className="border border-red-500 border-solid flex h-full w-full pl-4 bg-white">
            <label htmlFor="search-region" className="flex h-full items-center ">
              <MapPin/>
            </label>
            <input id="search-region" className="border-none focus:border-none w-full" placeholder="Buscar região"></input>
          </div>

        </div>

      </div>

      <APIProvider apiKey={key} >
        <Map
        style={{width: '100vw', height: '100vh'}}
        defaultCenter={{lat: -12.2583, lng: -38.9606}}
        defaultZoom={13}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapId={`421ca848a160d26b`}
        >
          <MapsAndPins />

        </Map>

      </APIProvider>


    </div>
  );
}
