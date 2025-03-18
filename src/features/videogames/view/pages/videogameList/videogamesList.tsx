import { useContext, useRef } from "react";
import VideogameCard from "../../components/videogameCard";
import { VideogameSummaryI } from "../../../domain/entities/videogame";
import LoadingScreen from "@/shared/view/components/vgLoadingScreen";
import VgDropdown from "@/shared/view/components/vgDopdown";
import { VideogameContext } from "../../state/stateManager";
import VgPaginator from "../../components/vgPaginator";

export function VideogamesList() {
  const context = useContext(VideogameContext);
  const paginatedVideogames = context?.videogamesPaginated;
  const page = context?.filters.page;
  const page_size = context?.filters.page_size;
  const inputRef = useRef<HTMLInputElement>(null);
  const listLoading = context?.listLoading;

  let videogameList: VideogameSummaryI[] = paginatedVideogames?.results || [];
  
  function changePage(page:number){
    context?.changePage(page);
  }
  function onChangeOrdering(key:string,ordering:any){
    context?.changeOrdering(ordering);
  }
  function onChangeSort(key:string,sort:any){
      context?.changeSort(sort);
  }
  function onSubmitSearch(){
    if (!inputRef?.current) return;
    else if (inputRef.current.value === '') return;
    let search = inputRef.current.value;
    context?.searchQuery(encodeURIComponent(search));
  }
  return (
    <div className="h-full">
      <div className="flex flex-col justify-between items-center mb-4 xl:flex-row md:items-start">
        <div className="flex flex-col mb-4 gap-4 items-center md:flex-row md:items-start">
          <div className="flex gap-3 items-center">
            <label>Sort: </label>
            <VgDropdown width={150} options={["desc", "asc"]} keyString="sort" onchange={onChangeSort}/>
          </div>
          <div className="flex gap-3 items-center">
            <label>Ordering: </label>
            <VgDropdown width={150} options={["metacritic", "released","name","created","updated","rating","added"]} keyString="ordering" onchange={onChangeOrdering}/>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <label>Search: </label>
          <div className="dropdown relative select-none flex gap-2" >
            <span className="rounded flex">
              <input type="text" className="outline-none" ref={inputRef} placeholder={"Mario Kart 8..."} onKeyDown={(e)=>{if(e.key === 'Enter') onSubmitSearch()}}/>
              <button type="submit" onClick={()=>{onSubmitSearch()}} className="cursor-pointer">
              <svg className="w-3.5 h-3.5 me-2" style={{transform: 'rotate(180deg)'}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
              </svg>
            </button>
            </span>
            
        </div>
        </div>
      </div>
      {
        listLoading && <LoadingScreen/>
      }
      {videogameList.length > 0 && !listLoading &&
        <>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
          {videogameList.map((videogame: VideogameSummaryI) => <VideogameCard videogame={videogame} key={videogame.id} />)}
          </div>
          <div className="mt-4">
          <VgPaginator count={paginatedVideogames?.count || 0} page={page || 1} size_page={page_size || 10} changePage={changePage} leftDisabled={context?.videogamesPaginated?.previous === null} rightDisabled={context?.videogamesPaginated?.next === null} />
          </div>
        </>
      }
      {!listLoading && videogameList.length === 0 && <div className="text-center">No results found</div>}
    </div>
  );
}