import { PaginatedResponse } from "../../domain/entities/paginatedResponse";
import { TagI } from "../../domain/entities/tag";
import { TagsRepositoryI } from "../../domain/repositories/tagsRepositoryI";
import { TagsDatasource } from "../datasources/tagsDatasource";



export class TagsRepositoryImpl implements TagsRepositoryI {
    constructor(private tagsDatasource: TagsDatasource) {}
    async getTags(): Promise<PaginatedResponse<TagI>> {
        const model = await this.tagsDatasource.getTagsList();
        const data:PaginatedResponse<TagI> = {
            ...model,
            results: model.results.map((item)=>{
                return {...item
                } as TagI;
              })
        } 
        return data;
    }

}