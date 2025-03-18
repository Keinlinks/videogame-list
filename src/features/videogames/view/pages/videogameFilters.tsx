import VgInputNumber from "@/shared/view/components/vgInputNumber";
import VgDropdown from "@/shared/view/components/vgDopdown";
import { useContext, useEffect, useState } from "react";
import { VideogameContext } from "../state/stateManager";
import { getGenresListUseCase } from "../../domain/useCases/getGenresList";
import { getTagsListUseCase } from "../../domain/useCases/getTagsList";
import { getPlatformsListUseCase } from "../../domain/useCases/getPlatformsList";
import { PlatformDetailsI } from "../../domain/entities/platformDetail";
import { getDevelopersListUseCase } from "../../domain/useCases/getDeveloperList";
import { DeveloperI } from "../../domain/entities/developer";


export default function VideogameFilters() {

  const context = useContext(VideogameContext);
  let [minMetacritic, setMinMetacritic] = useState<number | undefined>(undefined);
  let [maxMetacritic, setMaxMetacritic] = useState<number | undefined>(undefined);


  const onChange = (key:string,value: any)=>{
    if (!context) return;
    if (value === "All" || value === "all") value = "";
    switch(key){
      case "genre":
        context.filters.genres = [value];
        break;
      case "platforms":
        context.filters.platforms = [value.id];
        break;
      case "developers":
        context.filters.developers = [value.id];
        break;
      case "tags":
        context.filters.tags = [value];
        break;
      case "dates":
        context.filters.dates = [`${value}-01-01`,`${value}-12-31`];
    }
  }
  let [GenreOptions, setGenreOptions] = useState<string[]>([]);
  let [platformsOptions, setPlatformsOptions] = useState<PlatformDetailsI[]>([]);
  let [developerOptions, setDeveloperOptions] = useState<DeveloperI[]>([]);
  let [tagsOptions, setTagsOptions] = useState<string[]>([]);

  let yearOptions = ["All",...[...Array(70).keys()].map(i => (new Date().getFullYear() + 1 - i).toString())];

  useEffect(()=>{
    if(context){
      getGenresListUseCase().then((response)=>{
        let genresNames = response.results.map((item)=>item.name);
        setGenreOptions(['All',...genresNames]);
      })
      getTagsListUseCase().then((response)=>{
        let tagsNames = response.results.map((item)=>item.name);
        setTagsOptions(["All",...tagsNames]);
      })
      getPlatformsListUseCase().then((response)=>{
        setPlatformsOptions(response.results);
      })
      getDevelopersListUseCase().then((response)=>{
        setDeveloperOptions(response.results);
      })
    }
  },[])

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

  function clearForm(key:string){
    if (!context) return;
    if(key === "genre"){
      context.filters.genres = [];
    }
    else if(key === "platforms"){
      context.filters.platforms = [];
    }
    else if(key === "developers"){
      context.filters.developers = [];
    }
    else if(key === "tags"){
      context.filters.tags = [];
    }
  }

  return <div>
    <h3 className="text-center font-bold text-xl mt-2">Filters</h3>
    <div className="px-4 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
            <label>Genre</label>
            <VgDropdown options={GenreOptions} keyString="genre" onchange={onChange} clearButton={clearForm}/>
        </div>
        <div className="flex flex-col gap-2">
            <label>Plataform</label>
            <VgDropdown options={platformsOptions} label="name" keyString="platforms" onchange={onChange} clearButton={clearForm}/>
        </div>
        <div className="flex flex-col gap-2">
            <label>Developer</label>
            <VgDropdown options={developerOptions} label="name" keyString="developers" onchange={onChange} clearButton={clearForm}/>
        </div>
        <div className="flex flex-col gap-2">
            <label>Tags</label>
            <VgDropdown options={tagsOptions} keyString="tags" onchange={onChange} clearButton={clearForm}/>
        </div>
        <div className="flex flex-col gap-2">
            <label>Released year</label>
            <div className="flex items-center w-full">
            <VgDropdown options={yearOptions} keyString="dates" onchange={onChange} clearButton={clearForm}/>
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