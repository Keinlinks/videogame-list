import { getMetacriticColor } from "@/core/utils/utils";
import { VideogameDetailsI } from "@/features/videogames/domain/entities/videogame";


export function VideogameDetails({videogame}:{videogame:VideogameDetailsI}) {
  console.log(videogame);
  return <section className="h-full flex flex-col">
            <div className="w-full h-[calc(100vh-150px)]">
              <div className="flex justify-center h-[500px]">
                <div className="  drop-shadow-xl relative h-full w-full" >
                  <div className="rounded-b-xl w-full h-full  bg-cover bg-fixed bg-center bg-no-repeat blur-[2px]" style={{backgroundImage:`url(${videogame.background_image})`}}>
                  </div>
                  <div className="absolute rounded-b-xl h-full flex flex-col items-center justify-between top-0 left-0 w-full transition-all" style={{backgroundImage: `linear-gradient(360deg, #000000, transparent)`}}>
                      <div>
                      <div>
                        <h2 className="text-center text-3xl font-bold mb-5 antialiased">Platforms</h2>
                          {videogame.platforms.map((platform,index)=>{
                              return <div key={index} className="flex items-center justify-center my-2">
                                  <p>{platform.name}</p>
                              </div>
                          })}
                        </div>
                      </div>
                      <div>
                        <div className={"outline-1 h-16 w-16 right-2 border border-black text-center align-middle rounded-full p-1 flex flex-col justify-center " + getMetacriticColor(videogame.metacritic)}>
                          <p className="font-bold text-center text-3xl">{videogame.metacritic}</p>
                        </div>
                      </div>
                      <div className="p-10">
                        <p className="text-center text-4xl font-bold my-2">{videogame.name_original}</p>
                        <p className="text-center text-xl text-zinc-500">{videogame.year}</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="w-2/3 mx-auto mt-5 flex">
              <div className="w-full h-full">
                <h2 className="text-center text-3xl font-bold mb-5">Description</h2>
                <p className="text-center" dangerouslySetInnerHTML={{ __html: videogame.description }}></p>
              </div>
              </div>
              <div className="mt-10 w-1/2 mx-auto">
                <h2 className="text-center text-3xl font-bold mb-5">Trailers</h2>
                          
              </div>
            </div>
            
          </section>
}