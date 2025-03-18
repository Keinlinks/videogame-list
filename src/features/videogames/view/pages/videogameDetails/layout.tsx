import { getVideogameByIdUseCase } from "@/features/videogames/domain/useCases/getVideogameById";
import { useEffect, useState } from "react";
import { VideogameDetails } from "./videogameDetails";
import VgLoadingScreen from "@/shared/view/components/vgLoadingScreen";
import { VideogameDetailsI } from "@/features/videogames/domain/entities/videogame";

export default function VideogameDetailsLayout({id}: {id:string}) {
    const [isLoading,setLoading] = useState<boolean>(true);
    let [error, setError] = useState<string | null>(null);
    const [videoGame, setVideoGame] = useState<VideogameDetailsI | null>(null);
    
    id && Number.isInteger(+id) ? "" : setError("id is required");

    useEffect(()=>{
        if(error)return;
        if (!id) return;
        getVideogameByIdUseCase(+id).then((response)=>{
            if (!response){
                error = "Videogame not found";
                return;
            }
            setVideoGame(response);
            setLoading(false);
        })
    },[])
    return (<>
        {!isLoading && !error && videoGame && <VideogameDetails videogame={videoGame} />}
        {isLoading && !error && <>
        <div className="h-[calc(100vh-120px)] flex items-center justify-center">

            <VgLoadingScreen/>
        </div>
        </>}
        {!isLoading && error && <>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-red-500">{error}</h1>
            </div>
        </>}
    </>)
}
