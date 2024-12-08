import ReportCard from "@/components/card-report";

export default function Reports() {
    return (
    <div className="flex flex-col pb-20">
        <div className="px-5 pt-16 flex justify-center">
            <h1 className="font-bold uppercase text-custom-primary">Denuncias</h1>
        </div>

        <ReportCard />

    </div>
    )
}