import { pushQueriesSearchUrl } from "../../utils/utils";
import { PaginatedResponse } from "../entities/paginatedResponse";
import { VideogameSummaryI } from "../entities/videogame";
import { VideogamesFilter } from "../entities/videogamesFilter";

export function getVideogamesListUseCase(filter: VideogamesFilter): Promise<PaginatedResponse<VideogameSummaryI>> {
    const url = pushQueriesSearchUrl(filter);
    return fetch('/api/videogames?' + url).then(response => response.json());
}