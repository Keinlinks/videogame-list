import { ApiRawgTagsDatasource, TagsDatasource } from "../../data/datasources/tagsDatasource";
import { TagsRepositoryImpl } from "../../data/repository/tagsRepositoryImpl";


//los tipos de fuentes de datos que se pueden utilizar, para implementar uno nuevo se debe agregar aqui y en repositoryMap
type TagsRepositoryType = 'rawgApi';

const repositoryMap: Record<TagsRepositoryType, TagsDatasource> = {
    rawgApi: new ApiRawgTagsDatasource(),
};

export function ApiTagsRepositoryFactory(type: TagsRepositoryType) {
    let apiTagsDatasource = repositoryMap[type] || repositoryMap['rawgApi'];

    return new TagsRepositoryImpl(apiTagsDatasource);
}