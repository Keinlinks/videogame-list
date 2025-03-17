import { useState } from "react";

export default function VgDropdown({options, width}: {options: string[], width?: number}) {
    let [isOpen, setIsOpen] = useState(false);
    let [selected, setSelected] = useState(options[0]);


    let openStyle = {
        maxHeight: '215px',
        transition: 'max-height 0.2s ease-in',
        borderBottom: '1px solid #dddad6'
      }
    function selectedItem(option: string) {
        setSelected(option);
        setIsOpen(false);
      }

    return <>
        <div className="dropdown relative select-none" style={{width: width ? width: '100%'}} onClick={()=>{
          if(!isOpen){
            setIsOpen(true)
          }
        }} onMouseLeave={()=>{setIsOpen(false)}}>
            <span className="rounded">{selected}</span>
            <ul className="overflow-y-auto max-h-[150px] absolute top-12 w-full z-50" style={isOpen ? openStyle : {}}>
              {options.map((option, index) => (
                <li className="bg-black cursor-pointer" key={index}>
                  <a onClick={()=>{selectedItem(options[index])}} >{option}</a>
                </li>
              ))}
            </ul>
        </div>
    </>
}