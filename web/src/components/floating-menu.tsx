import { CircleAlert, Grip, MapPinPlusInside, Settings } from "lucide-react";

export default function FloatingMenu() {
    return (
        <div className="fixed bg-custom-primary w-full bottom-0 flex text-white">
            <div className="flex flex-col items-center w-full py-[.9175rem] ">
                <Grip width={26} height={26} stroke='white' className='' />
                <p className='text-[.7rem]'>Inicio</p>
            </div>
            <div className="flex flex-col items-center w-full py-[.9175rem]">
                <CircleAlert width={26} height={26} stroke='white' className='' />
                <p className='text-[.7rem]'>Denuncias</p>
            </div>
            <div className="flex flex-col items-center w-full py-[.9175rem]">
                <MapPinPlusInside width={26} height={26} stroke='white' className='' />
                <p className='text-[.7rem]'>Postos</p>
            </div>
            <div className="flex flex-col items-center w-full py-[.9175rem]">
                <Settings width={26} height={26} stroke='white' className='' />
                <p className='text-[.7rem]'>Configurações</p>
            </div>
        </div>
    )
}