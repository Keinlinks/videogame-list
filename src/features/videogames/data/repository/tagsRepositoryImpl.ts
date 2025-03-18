import { PaginatedResponse } from "../../domain/entities/paginatedResponse";
import { TagI } from "../../domain/entities/tag";
import { TagsRepositoryI } from "../../domain/repositories/tagsRepositoryI";
import { TagsDatasource } from "../datasources/tagsDatasource";



export class TagsRepositoryImpl implements TagsRepositoryI {
    constructor(private tagsDatasource: TagsDatasource) {}
    getTags(): Promise<PaginatedResponse<TagI>> {
        return this.tagsDatasource.getTagsList();
    }

}