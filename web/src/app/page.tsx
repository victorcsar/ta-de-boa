import { MapPin } from "@/components/allsvgused";
import GoogleMap from "@/components/google_features/map";
import MapsAndPins from "@/components/google_features/markersandpins";
import { mapPinsFixed } from "@/lib/staticroutes"

// const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""


export default function Home() {
  const data = mapPinsFixed
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

      <GoogleMap>
        <MapsAndPins data={data} />
      </GoogleMap>

    </div>
  );
}
