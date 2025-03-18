import { PlatformI } from "../../domain/entities/platformI";
import { PaginatedResponseModel } from "../models/paginatedResponseModel";


export interface PlatformsDatasource {
    getPlatforms(): Promise<PaginatedResponseModel<PlatformI>>;
}

export class ApiRawgPlatformsDatasource implements PlatformsDatasource {
    getPlatforms(): Promise<PaginatedResponseModel<PlatformI>> {
        throw new Error("Method not implemented.");
    }

}