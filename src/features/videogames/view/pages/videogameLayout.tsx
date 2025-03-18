import React, { useEffect, useState } from "react";
import VideogameFilters from "./videogameFilters";
import { VideogamesList } from "./videogamesList";
import { getVideogamesListUseCase } from "../../domain/useCases/getVideogameList";
import { PaginatedResponse } from "../../domain/entities/paginatedResponse";
import { VideogameContext, filtersInitialState } from "../state/stateManager";

export default function VideogameLayout() {
    const [videogamesPaginated, setVideogamesPaginated] = useState<PaginatedResponse | null>(null);

    let filters = filtersInitialState;

    const applyFilters = async () => {
        setVideogamesPaginated(null);
        let response = await getVideogamesListUseCase(filters);
        setVideogamesPaginated(response);
    }
    const changePage = async (page:number)=>{
        if (!videogamesPaginated) return;
        if(page < 1 || page > Math.ceil(videogamesPaginated.count/filters.page_size)) return;
        filters.page = page;
        applyFilters();
    }
    const searchQuery = async (search:string)=>{
        filters.search = search;
        filters.page = 1;
        applyFilters();
    }
    const changeOrdering = async (ordering:"name" | "released" | "added" | "created" | "updated" | "rating" | "metacritic")=>{
        filters.ordering = ordering;
        applyFilters();
    }
    const changeSort = async (sort:"asc" | "desc")=>{
        filters.sort = sort;
        applyFilters();
    }

    useEffect(() => {
        applyFilters();
    }, []);

    return <>
    <VideogameContext.Provider value={{videogamesPaginated,setVideogamesPaginated,applyFilters,filters,changePage,changeOrdering,changeSort,searchQuery}}>
        <div className="flex border-t">
            <aside className="w-72 border-r sticky top-0 h-[calc(100vh-120px)]">
                <VideogameFilters />
            </aside>
            <main className="flex-1 p-3">
                <VideogamesList/>
            </main>
        </div>
    </VideogameContext.Provider>
    </>
}