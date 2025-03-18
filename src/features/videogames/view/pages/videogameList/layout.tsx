import React, { useEffect, useState } from "react";
import VideogameFilters from "./videogameFilters";
import { VideogamesList } from "./videogamesList";
import { getVideogamesListUseCase } from "../../../domain/useCases/getVideogameList";
import { PaginatedResponse } from "../../../domain/entities/paginatedResponse";
import { VideogameContext, filtersInitialState } from "../../state/stateManager";
import { VideogameSummaryI } from "../../../domain/entities/videogame";

export default function VideogameLayout() {
    const [videogamesPaginated, setVideogamesPaginated] = useState<PaginatedResponse<VideogameSummaryI> | null>(null);
    const [listLoading, setListLoading] = useState<boolean>(false);
    let filters = filtersInitialState;

    const applyFilters = async () => {
        setVideogamesPaginated(null);
        setListLoading(true);
        const response = await getVideogamesListUseCase(filters);
        setVideogamesPaginated(response);
        setListLoading(false);
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
    const resetFilters = ()=>{
        filters = {
            page: 1,
            page_size: 20,
            search: "",
            ordering: "metacritic",
            sort: "desc",
            creators: [],
            developers: [],
            dates: [],
            genres: [],
            platforms: [],
            publishers: [],
            tags: [],
            metacritic: [],
          };
    }
    useEffect(() => {
        resetFilters();
        applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>
    <VideogameContext.Provider value={{
        videogamesPaginated,
        setVideogamesPaginated,
        applyFilters,
        filters,
        changePage,
        changeOrdering,
        changeSort,
        searchQuery,
        listLoading
        }}>
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