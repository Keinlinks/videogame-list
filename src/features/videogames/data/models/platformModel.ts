export interface PlatformModel {
    platform: {
        id:number;
        slug:string,
        name:string,
    },
    released_at:string;
    requirements:{
        minimum:string,
        recommended:string,
    }
}