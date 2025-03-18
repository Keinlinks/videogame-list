export interface VideogameSummaryI{
    id: number;
    name: string;
    metacritic: number;
    year: number | null;
    platforms: {
        id: number;
        name: string;
    }[];
    released: Date | null;
    background_image: string;
}

export interface VideogameDetailsI extends VideogameSummaryI{
    name_original: string,
    description: string,
    tba: boolean,
    background_image_additional: string,
    website: string,
    playtime: number,
}
