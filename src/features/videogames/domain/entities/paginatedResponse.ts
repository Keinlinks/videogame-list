import { VideogameSummaryI } from "./videogame";

export interface PaginatedResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: VideogameSummaryI[];
  }