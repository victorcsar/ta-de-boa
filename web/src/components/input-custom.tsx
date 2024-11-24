import { InputHTMLAttributes } from "react"


interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    title: string
} 

export default function InputCustom({label, title, ...props}: inputProps){
    return(
        <div>
            <label htmlFor={label}>{title}</label>

            <input id={label} {...props}></input>
        </div> 
    )
}