import React, { createContext, useEffect, useState } from "react";
import VideogameFilters from "./videogameFilters";
import { VideogamesList } from "./videogamesList";
import { VideogameSummaryI } from "../../domain/entities/videogame";
import { getVideogamesListUseCase } from "../../domain/useCases/getVideogameList";
import { VideogamesFilter } from "../../domain/entities/videogamesFilter";

export const VideogameContext = createContext<{
    videogames: VideogameSummaryI[];
    setVideogames: React.Dispatch<React.SetStateAction<VideogameSummaryI[]>>;
    requestVideogamesList: (filters: VideogamesFilter) => void;
    filters: VideogamesFilter;
  } | null>(null);

export default function VideogameLayout() {
    const [videogames, setVideogames] = useState<VideogameSummaryI[]>([]);
    const [filters, setFilters] = useState<VideogamesFilter>({page: 1, page_size: 10, search: ""});

    const requestVideogamesList = async () => {
        let response = await getVideogamesListUseCase(filters);
        setVideogames(response.results);
    }

    useEffect(()=>{
        requestVideogamesList();
    })

    return <>
    <VideogameContext.Provider value={{videogames,setVideogames,requestVideogamesList,filters}}>
        <div className="flex relative border-t">
            <aside className="w-72 border-r sticky mt-2 top-0">
                <VideogameFilters />
            </aside>
            <main className="flex-1 p-3">
                <VideogamesList/>
            </main>
        </div>
    </VideogameContext.Provider>
    </>
}