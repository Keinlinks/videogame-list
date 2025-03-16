import { useEffect, useState } from "react";
import VideogameCard from "../components/videogameCard";
import { VideogameSummaryI } from "../../domain/entities/videogame";
import { PaginatedResponse } from "../../domain/entities/paginatedResponse";


export function VideogamesListPage() {
  const [videogameList, setVideogameList] = useState<VideogameSummaryI[]>([]);

  useEffect(() => {
    fetch("api/videogames?page=1&pageSize=10")
      .then((response) => response.json())
      .then((data: PaginatedResponse) => setVideogameList(data.results));
  }, []);

  return (
    <div>
      <h1>Videogames List</h1>
      {videogameList.length > 0 ? (
        <VideogameCard videogame={videogameList[0]} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}