interface StaticRoutesPosition {
    lat: number,
    lng: number
}
interface StaticRoutes {
    key: string,
    position: StaticRoutesPosition
}
export const mapPinsFixed: StaticRoutes[] = [
    {
        key: "Small burned",
        position: {
            lat: -12.239471771876524,
            lng: -38.959500032648165
        }
    },
    {
        key: "White Wings",
        position: {
            lat: -12.204621352445871,
            lng:  -38.99964368938422
        }

    },
    {
        key: "Clean field",
        position: {
            lat: -12.215731670436238,
            lng: -38.97471795481743
        }

    }
]