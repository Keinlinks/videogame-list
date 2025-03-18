import React, { createContext } from "react";
import { VideogamesFilter } from "../../domain/entities/videogamesFilter";
import { PaginatedResponse } from "../../domain/entities/paginatedResponse";

export const VideogameContext = createContext<{
    videogamesPaginated: PaginatedResponse | null;
    setVideogamesPaginated: React.Dispatch<React.SetStateAction<PaginatedResponse | null>>;
    filters: VideogamesFilter;
    listLoading: boolean;
    applyFilters: () => void;
    changePage: (page:number)=>void;
    changeOrdering: (ordering:"name" | "released" | "added" | "created" | "updated" | "rating" | "metacritic")=>void;
    changeSort: (sort:"asc" | "desc")=>void;
    searchQuery: (search:string)=>void;
  } | null>(null);

export const filtersInitialState:VideogamesFilter = {
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
  }

export function setFilters(filters:VideogamesFilter,setterFilters:React.Dispatch<React.SetStateAction<VideogamesFilter>>){

}