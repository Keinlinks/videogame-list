import { useContext, useEffect, useState } from "react";
import VideogameCard from "../components/videogameCard";
import { VideogameSummaryI } from "../../domain/entities/videogame";
import { PaginatedResponse } from "../../domain/entities/paginatedResponse";
import LoadingScreen from "@/shared/view/components/vgLoadingScreen";
import VgDropdown from "@/shared/view/components/vgDopdown";
import { VideogameContext } from "./videogameLayout";

export function VideogamesList() {
  const videogameContext = useContext(VideogameContext);
  let videogameList: VideogameSummaryI[] = videogameContext?.videogames || [];
  return (
    <div className="h-full">
      <div className="flex mb-4 gap-4 items-center">
        <div className="flex gap-3 items-center">
          <label>Sort: </label>
          <VgDropdown width={150} options={["Relevance", "New", "Old"]}/>
        </div>
        <div className="flex gap-3 items-center">
          <label>Ordering: </label>
          <VgDropdown width={150} options={["Metacritic", "Name","Released"]}/>
        </div>
        <div className="flex gap-3 items-center">
          <label>Search: </label>
        </div>
      </div>
      {videogameList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {videogameList.map((videogame: VideogameSummaryI) => <VideogameCard videogame={videogame} key={videogame.id} />)}
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}