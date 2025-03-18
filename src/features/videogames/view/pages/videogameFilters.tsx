import VgInputNumber from "@/shared/view/components/vgInputNumber";
import VgDropdown from "@/shared/view/components/vgDopdown";
import { useContext, useState } from "react";
import { VideogameContext } from "../state/stateManager";


export default function VideogameFilters() {

  const context = useContext(VideogameContext);
  let [minMetacritic, setMinMetacritic] = useState<number | undefined>(undefined);
  let [maxMetacritic, setMaxMetacritic] = useState<number | undefined>(undefined);


  const onChange = (key:string,value: string)=>{
    if (!context) return;
    switch(key){
      case "genre":
        context.filters.genres = [value];
        break;
      case "platforms":
        context.filters.platforms = [value];
        break;
      case "developers":
        context.filters.developers = [value];
        break;
      case "publishers":
        context.filters.publishers = [value];
        break;
      case "dates":
        context.filters.dates = [`${value}-01-01`,`${value}-12-31`];
    }
  }

  let GenreOptions = ["All", "Action", "Adventure", "RPG", "Racing", "Shooter", "Simulation", "Sports", "Strategy"];
  let plataformsOptions = ["All", "PC", "PS4", "PS5", "XBOX", "XBOXONE", "WII", "WIIU", "3DS", "SWITCH", "IOS", "ANDROID", "OTHER"];
  let developerOptions = ["All", "EA", "NINTENDO", "SEGA", "SNK", "SQUARE ENIX", "UBISOFT", "OTHER"];
  let publisherOptions = ["All", "NINTENDO", "SEGA", "SQUARE ENIX", "UBISOFT", "OTHER"];
  let yearOptions = ["All",...[...Array(70).keys()].map(i => (new Date().getFullYear() + 1 - i).toString())];

  function submitFilter() {
    if(!context) return;
    if(minMetacritic && !maxMetacritic){
      context.filters.metacritic = [minMetacritic,100];
    }
    else if(maxMetacritic && !minMetacritic){
      context.filters.metacritic = [0,maxMetacritic];
    }
    else if(minMetacritic && maxMetacritic){
      context.filters.metacritic = [minMetacritic,maxMetacritic];
    }
    else{
      context.filters.metacritic = [];
    }
    context?.applyFilters();
  }

  return <div>
    <h3 className="text-center font-bold text-xl mt-2">Filters</h3>
    <div className="px-4 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
            <label>Genre</label>
            <VgDropdown options={GenreOptions} keyString="genre" onchange={onChange}/>
        </div>
        <div className="flex flex-col gap-2">
            <label>Plataform</label>
            <VgDropdown options={plataformsOptions} keyString="platforms" onchange={onChange}/>
        </div>
        <div className="flex flex-col gap-2">
            <label>Developer</label>
            <VgDropdown options={developerOptions} keyString="developers" onchange={onChange}/>
        </div>
        <div className="flex flex-col gap-2">
            <label>Publisher</label>
            <VgDropdown options={publisherOptions} keyString="publishers" onchange={onChange}/>
        </div>
        <div className="flex flex-col gap-2">
            <label>Released year</label>
            <div className="flex items-center w-full">
            <VgDropdown options={yearOptions} keyString="dates" onchange={onChange}/>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <label>Metacritics</label>
            <div className="flex items-center w-full">
            <VgInputNumber width={70} min={0} max={100} placeholder="Min." onChange={(value)=>setMinMetacritic(value)}/>
            <span> - </span>
            <VgInputNumber width={70} min={0} max={100} placeholder="Max." onChange={(value)=>setMaxMetacritic(value)}/>
            </div>
        </div>
        <button onClick={submitFilter} className="bg-blue-500 cursor-pointer hover:bg-blue-400 text-white px-4 py-2 rounded-md">Submit</button>
    </div>
  </div>;
}