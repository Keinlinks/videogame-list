export interface VideogamesFilter {
    page: number;
    page_size: number;
    ordering?: 'name' | 'released' | 'added' | 'created' | 'updated' | 'rating' | 'metacritic';
    sort?: 'asc' | 'desc';
    search?: string;
    platforms?: string[];
    developers?: string[];
    publishers?:string[];
    genres?:string[];
    tags?:string[];
    creators?:string[];
    dates?:string[];
    metacritic?:number[];
  }