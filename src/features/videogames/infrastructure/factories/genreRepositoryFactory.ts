import { ApiRawgGenresDatasource, GenresDatasource } from "../../data/datasources/genresDatasource";
import { GenresRepositoryImpl } from "../../data/repository/genresRepositoryImpl";


//los tipos de fuentes de datos que se pueden utilizar, para implementar uno nuevo se debe agregar aqui y en repositoryMap
type GenreRepositoryType = 'rawgApi';

const repositoryMap: Record<GenreRepositoryType, GenresDatasource> = {
    rawgApi: new ApiRawgGenresDatasource(),
};

export function ApiGenresRepositoryFactory(type: GenreRepositoryType) {
    const apiGenresDatasource = repositoryMap[type] || repositoryMap['rawgApi'];

    return new GenresRepositoryImpl(apiGenresDatasource);
}