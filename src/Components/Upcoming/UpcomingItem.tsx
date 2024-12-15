import Btn from "../../UI/Btn";
import { IMovie } from "../../api/getApi";
import { FC, useRef } from "react";
interface UpcomingItemProps {
  upcoming: IMovie
}

const UpcomingItem: FC<UpcomingItemProps> = ({ upcoming }) => {
  const fullImg = import.meta.env.VITE_FULL_IMG
  const title = useRef(null)
  return (
    <div className="upcoming_item" >
      < img className="upcoming_img" src={`${fullImg}${upcoming.backdrop_path}`} alt="" />
      <h1 className="upcoming_title" ref={title}>{upcoming.title}</h1>
      <p className="upcoming_text">{upcoming.overview}</p>
      <Btn type='movie' id={upcoming.id} />
    </div>
  )
}

export default UpcomingItem