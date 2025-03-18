import { pushQueriesSearchUrl } from "../../utils/utils";
import { PaginatedResponse } from "../entities/paginatedResponse";

export function getVideogamesListUseCase(filter: any): Promise<PaginatedResponse> {
    let url = pushQueriesSearchUrl(filter);
    return fetch('api/videogames?' + url).then(response => response.json());
}