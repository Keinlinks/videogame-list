import { ApiRawgDevelopersDatasource, DevelopersDatasource } from "../../data/datasources/developersDatasource";
import { DevelopersRepositoryImpl } from "../../data/repository/developersRepositoryImpl";


//los tipos de fuentes de datos que se pueden utilizar, para implementar uno nuevo se debe agregar aqui y en repositoryMap
type DevelopersRepositoryType = 'rawgApi';

const repositoryMap: Record<DevelopersRepositoryType, DevelopersDatasource> = {
    rawgApi: new ApiRawgDevelopersDatasource(),
};

export function ApiDevelopersRepositoryFactory(type: DevelopersRepositoryType) {
    let apiDevelopersDatasource = repositoryMap[type] || repositoryMap['rawgApi'];

    return new DevelopersRepositoryImpl(apiDevelopersDatasource);
}