import { InputHTMLAttributes } from "react"


interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    title: string
} 

export default function InputCustom({label, ...props}: inputProps){
    return(
        // <div className="px-4 flex flex-col border-solid ">
        //     {/* <label htmlFor={label}>{title}</label> */}
        //     <input id={label} {...props} className="py-5 pl-4 border border-red-500 border-solid rounded-2xl"></input>
        // </div> 
        <div className="px-4 w-full">
            <div className="relative p-[.0625rem] bg-fade rounded-xl">
            <input
                id={label}
                {...props}
                className="w-full py-3 px-4 bg-white rounded-xl border-none outline-none"
            />
            </div>
        </div>

    )
}