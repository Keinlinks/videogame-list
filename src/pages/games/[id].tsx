import VideogameDetailsLayout from "@/features/videogames/view/pages/videogameDetails/layout";
import { useRouter } from "next/router";


export default function GameDetails() {
const router = useRouter();
  let { id } = router.query;
  id = id?.toString();
  if (!id || !Number.isInteger(+id) ) return <div>Invalid id</div>;
  return <VideogameDetailsLayout id={id} />;
}