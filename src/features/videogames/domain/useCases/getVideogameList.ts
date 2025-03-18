import { pushQueriesSearchUrl } from "../../utils/utils";
import { PaginatedResponse } from "../entities/paginatedResponse";
import { VideogameSummaryI } from "../entities/videogame";

export function getVideogamesListUseCase(filter: any): Promise<PaginatedResponse<VideogameSummaryI>> {
    let url = pushQueriesSearchUrl(filter);
    return fetch('api/videogames?' + url).then(response => response.json());
}