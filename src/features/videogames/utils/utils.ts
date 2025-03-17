import { VideogamesFilter } from "../domain/entities/videogamesFilter";

export function pushQueriesSearchUrl(filters: VideogamesFilter): string {
    let url = `?page=${filters.page}&page_size=${filters.page_size}&search=${filters.search}`;

    return url;
}