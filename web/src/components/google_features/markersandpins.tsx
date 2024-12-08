"use client"
import { StaticRoutes } from '@/lib/staticroutes'
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps'


interface PinsProps {
    data: StaticRoutes[]
}

export default function MapsAndPins(props: PinsProps){
    const mapPinsFixed = props.data

    return (
        <>
            {mapPinsFixed.map((point) => (
                <AdvancedMarker key={point.key} position={point.position} onClick={(e) => {console.log(e)}}>
                    <Pin />
                </AdvancedMarker>
            ))}
        </>
    )
}