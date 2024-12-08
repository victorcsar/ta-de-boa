import GoogleMap from "@/components/google_features/map";
import MapsAndPins from "@/components/google_features/markersandpins";
import { policeStation } from "@/lib/staticroutes";

export default function Place() {
    const data = policeStation
    return (
        <div className="flex flex-col w-full h-screen mb-9">    
          <GoogleMap>
            <MapsAndPins data={data} />
          </GoogleMap>
    
        </div>
      );
}