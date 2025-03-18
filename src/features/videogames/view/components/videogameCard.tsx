import { getMetacriticColor } from "@/core/utils/utils";
import { VideogameSummaryI } from "../../domain/entities/videogame";
import Link from "next/link";


export default function VideogameCard(props: {videogame: VideogameSummaryI}) {
  let imageUrl = props.videogame.background_image || 'image_default.jpg';
  return <>
    <Link href={'/games/' + props.videogame.id}>
    <div title={props.videogame.name} className="rounded-3xl cursor-pointer max-w-[310px] min-w-[250px] w-full bg-white dark:bg-gray-800 p-4 outline-1 hover:scale-[1.02] transition-all">
    <div className="mb-3">
      <div className="max-w-[310px] h-[250px] object-cover bg-no-repeat bg-center bg-cover relative rounded-xl" style={{backgroundImage: `url(${imageUrl})`}}>
        <span className={"absolute bottom-1 outline-1 h-8 w-8 right-2 border border-black text-center rounded-full p-1 " + getMetacriticColor(props.videogame.metacritic) }>{props.videogame.metacritic}</span>
      </div>
    </div>
    <div>
      <h2 className="text-2xl font-bold text-center">{props.videogame.name}</h2>
    </div>
    <div></div>
  </div>
  </Link>
  </>;
}