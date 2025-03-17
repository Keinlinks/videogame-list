import { RawgApiVideogameDatasource, VideogameDatasource, VideogameDatasourceMock } from "../../data/datasources/videogameDatasource";
import { VideogamesRepositoryImpl } from "../../data/repository/videogameRepositoryImpl";

//los tipos de fuentes de datos que se pueden utilizar, para implementar uno nuevo se debe agregar aqui y en repositoryMap
type VideogameRepositoryType = 'rawgApi' | 'mock';

const repositoryMap: Record<VideogameRepositoryType, VideogameDatasource> = {
    rawgApi: new RawgApiVideogameDatasource(),
    mock: new VideogameDatasourceMock(),
};

export function ApiVideogamesRepositoryFactory(type: VideogameRepositoryType) {
    let apiVideogameDatasource = repositoryMap[type] || repositoryMap['mock'];

    return new VideogamesRepositoryImpl(apiVideogameDatasource);
}