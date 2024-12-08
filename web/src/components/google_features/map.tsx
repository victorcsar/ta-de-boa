"use client"
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { PropsWithChildren } from "react";

const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""

export default function GoogleMap({children}: PropsWithChildren){
    return (
        <APIProvider apiKey={key}>
            <Map
            style={{width: '100vw', height: '100vh'}}
            defaultCenter={{lat: -12.2583, lng: -38.9606}}
            defaultZoom={13}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            mapId={`421ca848a160d26b`}
            >
            {children}
        </Map>

      </APIProvider>
    )

}