import { RawgApiVideogameDatasource } from "../../data/datasources/videogameDatasource";
import { VideogamesRepositoryImpl } from "../../data/repository/videogameRepositoryImpl";

//Estan son las factories que se utilizan para obtener instancias de los repositorios

export function RawgApiVideogamesRepositoryFactory(){
    return new VideogamesRepositoryImpl(new RawgApiVideogameDatasource());
}