import { DeveloperI } from "../../domain/entities/developer";
import { PaginatedResponse } from "../../domain/entities/paginatedResponse";
import { DevelopersRepositoryI } from "../../domain/repositories/developersRepositoryI";
import { DevelopersDatasource } from "../datasources/developersDatasource";

export class DevelopersRepositoryImpl implements DevelopersRepositoryI {
    constructor(private genresDatasource: DevelopersDatasource) {}
    async getDevelopers(): Promise<PaginatedResponse<DeveloperI>> {
        let model:any = await this.genresDatasource.getDevolpersList();
        let developerI:PaginatedResponse<DeveloperI> = {
            count: model.count,
            next: model.next,
            previous: model.previous,
            results: model.results.map((item:any)=>{
                return {...item
                } as DeveloperI;
              })
        }
        
        return developerI;
    }
}