import { mapPinsFixed } from '@/lib/staticroutes'
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps'



export default function MapsAndPins(){
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