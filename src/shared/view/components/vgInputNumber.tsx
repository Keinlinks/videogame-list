import { useState } from "react";


export default function VgInputNumber({width,placeholder}: {width: number, placeholder?: string}) {

    let [value, setValue] = useState<number>(new Date().getFullYear());

    function inputChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event);
    }
    return <>
    <div className="py-2 px-4" style={{width: width + 'px'}}>
        <input className="w-full outline-none" type="text" onChange={inputChange} placeholder={placeholder}/>
    </div>
    </>
}