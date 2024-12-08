import { MapPinPlusInside } from "lucide-react";

export default function ReportCard(){
    return (
    <div className="flex flex-col">
        <div className="bg-custom-primary text-white mx-3 py-3 px-5 rounded-xl flex flex-col gap-1">
            <div className="flex items-center gap-3">
                <MapPinPlusInside width={30} height={37}/>
                <div className="flex flex-col gap-[0.125rem]">
                    <h2 className="text-lg leading-none">+1 Ta Barril</h2>
                    <h3 className="text-sm">Queimadinha</h3>
                </div>
            </div>
            <p className="text-base line-clamp-3">
                Um menino bom me abordou, por volta das 15h com uma faca e tive que passar meu celular, tava paga.
            </p>
        </div>
    </div>
    )
}