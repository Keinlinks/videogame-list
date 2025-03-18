import { VideogameDetailsI } from "../entities/videogame";


export function getVideogameByIdUseCase(id: number): Promise<VideogameDetailsI> {
    return fetch('api/videogames/' + id).then(response => response.json());
}