import { MapPin } from "@/components/allsvgused"
import FloatingMenu from "@/components/floating-menu"
import Heatmap from "@/components/google_features/heatmap"
import { mapPinsFixed } from "@/lib/staticroutes"

export default function Home() {
    const data = mapPinsFixed

    return (
        <div className="flex flex-col w-full h-screen pb-9">

            <div className="fixed w-full z-20 flex top-16">

                <div className="relative w-full mx-4  rounded-2xl py-3 flex justify-center items-center">
                    <div className="border border-custom-secondary border-solid flex h-full w-full pl-4 bg-white rounded-xl">
                        <label htmlFor="search-region" className="flex h-full items-center ">
                            <MapPin />
                        </label>
                        <input id="search-region" className="border-none focus:border-none w-full rounded-xl" placeholder="Buscar região"></input>
                    </div>

                </div>

            </div>

            <Heatmap data={data}/>
            
            <FloatingMenu />

        </div>

    )
}