import { VideogameSummaryI } from "../../domain/entities/videogame";


export default function VideogameCard(props: {videogame: VideogameSummaryI}) {
  let imageUrl = props.videogame.background_image;
  return <div className="rounded-3xl max-w-[310px] w-full bg-amber-900">
    <div>
      <img src={imageUrl} alt={props.videogame.name + ' cover'} className="max-w-[310px] h-full object-cover" />
    </div>
    <div></div>
  </div>;
}