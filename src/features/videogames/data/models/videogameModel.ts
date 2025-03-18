import { PlatformModel } from "./platformModel";

export interface VideogameSummaryModel {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: Record<string, any>;
    ratings_count: number;
    reviews_text_count: string;
    added: number;
    added_by_status: Record<string, any>;
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    esrb_rating: {
        id: number;
        slug: string;
        name: string;
    };
    platforms: PlatformModel[];
}

export interface VideogameDetailsModel extends VideogameSummaryModel {
    
}