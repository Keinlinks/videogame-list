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
    
}
