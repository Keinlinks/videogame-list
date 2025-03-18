import { getDateFromString } from "@/core/utils/utils";
import { VideogameDetailsI, VideogameSummaryI } from "../../domain/entities/videogame";
import { VideogamesFilter } from "../../domain/entities/videogamesFilter";
import { VideogamesRepositoryI } from "../../domain/repositories/videogamesRepositoryI";
import { VideogameDatasource } from "../datasources/videogameDatasource";
import { PaginatedResponse } from "../../domain/entities/paginatedResponse";

export class VideogamesRepositoryImpl implements VideogamesRepositoryI {

    constructor(private videogameDatasource: VideogameDatasource) {}

    async getVideogamesList(filter: VideogamesFilter): Promise<PaginatedResponse<VideogameSummaryI>> {
        let model = await this.videogameDatasource.getVideogamesList(filter);
        let entity: PaginatedResponse<VideogameSummaryI> = {
            ...model,
            results: model.results.map((videogameExt)=>{
                let platforms:{
                    id: number;
                    name: string;
                }[]= [];
                if (videogameExt.platforms){
                    platforms = videogameExt.platforms.map((platform) => {
                        return {
                            id:platform.platform.id,
                            name: platform.platform.name
                        }
                    });
                }
                let videogame: VideogameSummaryI = {
                    id: videogameExt.id,
                    name: videogameExt.name,
                    metacritic: videogameExt.metacritic,
                    year: getDateFromString(videogameExt.released)?.getFullYear() || null,
                    platforms,
                    released: getDateFromString(videogameExt.released),
                    background_image: videogameExt.background_image,
                }
                return videogame;
            })
        }

        return entity;
    }
    async getVideogameById(id: number): Promise<VideogameDetailsI | null> {
        let model = await this.videogameDatasource.getVideogameById(id);
        if (!model) return null;
        return {
            background_image_additional: model.background_image_additional,
            description: model.description,
            name_original: model.name_original,
            playtime: model.playtime,
            tba: model.tba,
            website: model.website,
            background_image: model.background_image,
            id: model.id,
            metacritic: model.metacritic,
            name: model.name,
            platforms: model.platforms.map((platform) => {
                return {
                    id:platform.platform.id,
                    name: platform.platform.name
                }
            }),
            released: getDateFromString(model.released),
            year: getDateFromString(model.released)?.getFullYear() || null,
        };
    }

}