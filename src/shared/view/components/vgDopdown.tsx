import { useState } from "react";

interface props{
  options: any[],
  width?: number,
  keyString:string,
  label?:string,
  clearButton?:(key:string)=>void,
  onchange?:(key:string,value:string)=>void
}

export default function VgDropdown({options, width,onchange,keyString,label,clearButton}: props) {
    let [isOpen, setIsOpen] = useState(false);
    let [selected, setSelected] = useState(options[0]);

    let openStyle = {
        maxHeight: '215px',
        transition: 'max-height 0.2s ease-in',
        borderBottom: '1px solid #dddad6'
      }
    function selectedItem(option: any) {
      if(onchange != undefined) onchange(keyString,option);
        setSelected(label ? option[label] :option);
        setIsOpen(false);
      }
    function clearSelection(){
      setSelected(undefined);
      if (clearButton != undefined) clearButton(keyString);
    }
    return <>
        <div className="dropdown relative select-none" style={{width: width ? width: '100%'}} onMouseLeave={()=>{setIsOpen(false)}}>
            <div className="selected rounded h-[50px] flex justify-between">
              <div className="flex-1" onClick={()=>{
                if(!isOpen) setIsOpen(true);
              }}>{selected || 'All'}</div> 
              <button onClick={
                ()=>{clearSelection()}
              } className="material-icons">{clearButton ? 'Clear': ''}
                </button>
            </div>
            <ul className="overflow-y-auto max-h-[150px] absolute top-12 w-full z-50" style={isOpen ? openStyle : {}}>
              {options.map((option, index) => (
                <li className="bg-black cursor-pointer" key={index}>
                  <a onClick={()=>{selectedItem(options[index])}} >{label ? option[label] :option}</a>
                </li>
              ))}
            </ul>
        </div>
    </>
}