import { DeveloperI } from "../entities/developer";
import { PaginatedResponse } from "../entities/paginatedResponse";


export interface DevelopersRepositoryI{
    getDevelopers(): Promise<PaginatedResponse<DeveloperI>>;
}