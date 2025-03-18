import { ApiRawgPlatformsDatasource, PlatformsDatasource } from "../../data/datasources/platformsDatasource";
import { PlataformsRepositoryImpl } from "../../data/repository/platformsRepositoryImpl";



//los tipos de fuentes de datos que se pueden utilizar, para implementar uno nuevo se debe agregar aqui y en repositoryMap
type PlatformsRepositoryType = 'rawgApi';

const repositoryMap: Record<PlatformsRepositoryType, PlatformsDatasource> = {
    rawgApi: new ApiRawgPlatformsDatasource(),
};

export function ApiPlatformsRepositoryFactory(type: PlatformsRepositoryType) {
    let apiPlatformsDatasource = repositoryMap[type] || repositoryMap['rawgApi'];

    return new PlataformsRepositoryImpl(apiPlatformsDatasource);
}