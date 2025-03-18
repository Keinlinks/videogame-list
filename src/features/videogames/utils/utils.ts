import { VideogamesFilter } from "../domain/entities/videogamesFilter";

export function pushQueriesSearchUrl(filters: VideogamesFilter): string {
    let map = new Map(Object.entries(filters));
    let urlQueries = '';
    map.forEach((value:any, key:string) => {
        if (value !== undefined && value !== '' && value !== "All"){
            if (typeof value === 'string' &&key === "ordering" && value[0] !== '-'){
                urlQueries += `${key}=${filters.sort =='desc' ? '-' : ''}${value}&`;
            }
            else if (typeof value === 'string'){
                urlQueries += `${key.toLowerCase()}=${value.toLowerCase()}&`;
            }
            else if(Array.isArray(value) && value.length > 0) urlQueries += `${key.toLowerCase()}=${value.map((item)=>{return item.toString().toLowerCase()}).join(',')}&`;
            else
                urlQueries += `${key.toLowerCase()}=${value}&`;
        }
    });

    return urlQueries;
}

//sirve para obtener un string con los id's separados por comas
export function getIdArrayString(data:{id:string,name:string}[]):string{
    let array = data.map((item)=>{
        return item.id;
    })
    return array.join(",");
}