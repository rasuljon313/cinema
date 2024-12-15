import { FC } from "react";
import nophoto from "../assets/images/nophoto.png";
interface ActorsProps {
  actor: { profile_path: string, original_name: string }
}

const Actors: FC<ActorsProps> = ({ actor }) => {
  const hdImg = import.meta.env.VITE_HD_IMG
  return (
    <div className="actors">
      <img src={actor.profile_path ? hdImg + actor.profile_path : nophoto} alt="" />
      <p className="actors_name">{actor.original_name}</p>
    </div>
  )
}

export default Actors