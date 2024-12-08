import { staticReportsProps } from "@/lib/staticreports";
import { MapPinPlusInside } from "lucide-react";

interface ReportProps {
    data: staticReportsProps[]
}

export default function ReportCard({data}: ReportProps){
    
    return (
    <div className="flex flex-col gap-6">
        {data.map((report, index) => (
            <div key={index + 1} className="bg-custom-primary text-white mx-3 py-3 px-5 rounded-xl flex flex-col gap-1">
                <div className="flex items-center gap-3">
                    <MapPinPlusInside width={30} height={37}/>
                    <div className="flex flex-col gap-[0.125rem]">
                        <h2 className="text-lg leading-none">{report.title}</h2>
                        <h3 className="text-sm">{report.location}</h3>
                    </div>
                </div>
                <p className="text-base line-clamp-3">
                    {report.content}
                </p>
            </div>
        ))}
    </div>
    )
}