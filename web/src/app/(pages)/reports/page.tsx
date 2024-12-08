import ReportCard from "@/components/card-report";
import { staticReports } from "@/lib/staticreports";

export default function Reports() {
    const reportsData = staticReports
    return (
    <div className="flex flex-col pb-20 gap-8">
        <div className="px-5 pt-16 flex justify-center">
            <h1 className="font-bold uppercase text-custom-primary">Denuncias</h1>
        </div>

        <ReportCard data={reportsData} />
    </div>
    )
}