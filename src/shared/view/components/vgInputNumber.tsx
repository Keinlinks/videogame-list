import { useState } from "react";

interface Props {
    width: number;
    placeholder?: string;
    max?: number;
    min?: number;
    onChange?: (value: number | undefined) => void;
}


export default function VgInputNumber({width,placeholder,onChange,max,min}: Props) {

    const [value, setValue] = useState<string>("");

    function inputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValueString = event.target.value.replace(/[^0-9]/g, "");
        if(!newValueString){
            setValue("");
            onChange?.(undefined);
            return;
        }
        const valueNumber = parseInt(newValueString);
        if(max && valueNumber > max) return;
        if(min && valueNumber < min) return;

        setValue(valueNumber.toString());
        onChange?.(valueNumber);
    }
    return <>
    <div className="py-2 px-4" style={{width: width + 'px'}}>
        <input value={value} className="w-full outline-none" type="text" onChange={inputChange} placeholder={placeholder}/>
    </div>
    </>
}