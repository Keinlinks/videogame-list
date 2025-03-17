import VgInputNumber from "@/shared/view/components/vgInputNumber";
import VgDropdown from "@/shared/view/components/vgDopdown";
import { useContext } from "react";
import { VideogameContext } from "./videogameLayout";


export default function VideogameFilters() {

  const context = useContext(VideogameContext);

  const onChange = (value: any)=>{
    //context?.filters
  }

  let GenreOptions = ["All", "Action", "Adventure", "RPG", "Racing", "Shooter", "Simulation", "Sports", "Strategy"];
  let plataformsOptions = ["All", "PC", "PS4", "PS5", "XBOX", "XBOXONE", "WII", "WIIU", "3DS", "SWITCH", "IOS", "ANDROID", "OTHER"];
  let developerOptions = ["All", "EA", "NINTENDO", "SEGA", "SNK", "SQUARE ENIX", "UBISOFT", "OTHER"];
  let publisherOptions = ["All", "NINTENDO", "SEGA", "SQUARE ENIX", "UBISOFT", "OTHER"];

  function submitFilter() {
    context?.requestVideogamesList({
      page: 1,
      page_size: 10,
      search: "",
      
    });
  }

  return <div>
    <h3 className="text-center font-bold text-xl">Filters</h3>
    <div className="px-4 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
            <label>Genre</label>
            <VgDropdown options={GenreOptions}/>
        </div>
        <div className="flex flex-col gap-2">
            <label>Plataform</label>
            <VgDropdown options={plataformsOptions}/>
        </div>
        <div className="flex flex-col gap-2">
            <label>Developer</label>
            <VgDropdown options={developerOptions}/>
        </div>
        <div className="flex flex-col gap-2">
            <label>Publisher</label>
            <VgDropdown options={publisherOptions}/>
        </div>
        <div className="flex flex-col gap-2">
            <label>Released year</label>
            <div className="flex items-center w-full">
            <VgInputNumber width={70} placeholder="Min."/>
            <span> - </span>
            <VgInputNumber width={70} placeholder="Max."/>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <label>Metacritics</label>
            <div className="flex items-center w-full">
            <VgInputNumber width={70} placeholder="Min."/>
            <span> - </span>
            <VgInputNumber width={70} placeholder="Max."/>
            </div>
        </div>
        <button className="bg-blue-500 cursor-pointer hover:bg-blue-400 text-white px-4 py-2 rounded-md">Filtrar</button>
    </div>
  </div>;
}