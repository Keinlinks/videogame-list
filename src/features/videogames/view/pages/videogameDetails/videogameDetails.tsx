import { VideogameDetailsI } from "@/features/videogames/domain/entities/videogame";


export function VideogameDetails({videogame}:{videogame:VideogameDetailsI}) {
  return <div>VideogameDetailsPage: {videogame?.name}</div>;
}