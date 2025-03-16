import { VideogameSummaryModel } from "./videogameModel";

export interface PaginatedResponseModel {
    count: number;
    next: string | null;
    previous: string | null;
    results: VideogameSummaryModel[];
  }