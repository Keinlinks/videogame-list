import { VideogameDetailsI } from "../entities/videogame";


export function getVideogameByIdUseCase(id: number): Promise<VideogameDetailsI | null> {
    return fetch('/api/games/' + id).then(response => response.json());
}