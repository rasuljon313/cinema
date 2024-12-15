import Actors from "../../UI/Actors";
import Btn from "../../UI/Btn";
import close from "../../assets/images/close.svg";
import { FC } from "react";
import { info } from "../../store/infoId";

interface IInfoBlockProps {
    active: boolean
    setActive: (active: boolean) => void
    type: string
    info: info | null
    actors: { cast: [{ original_name: string, profile_path: string, id: number }] }
}
const fullImg = import.meta.env.VITE_FULL_IMG
const InfoBlock: FC<IInfoBlockProps> = ({ active, setActive, type, info, actors }) => {

    if (info) {
        return (
            <div className={`infoblock ${active && 'active'}`}>
                <div className="infoblock_img">
                    <img src={`${fullImg}${info.backdrop_path}`} alt="" />
                </div>
                <button className="infoblock_close" onClick={() => setActive(false)}>
                    <img src={close} alt="" />
                </button>
                <div className="infoblock_descr">
                    <h2 className="infoblock_descr_title">{type == 'movie' ? info.title : info.name}</h2>
                    <p className="infoblock_descr_text">{info.overview}</p>
                    <div className="infoblock_content">
                        <span>{info.release_date}</span>
                        {info.genres.map(genr => (
                            <span key={genr.name}>{genr.name},</span>
                        ))}
                        <span>
                            {info.runtime ?
                                `${Math.floor(info.runtime / 60)}h ${info.runtime % 60}m`
                                : ''
                            }
                        </span>
                    </div>
                    <div className="infoblock_actors">
                        {actors.cast.slice(0, 4).map(actor => (
                            <Actors key={actor.id} actor={actor} />
                        ))}
                    </div>
                    <Btn type={type} id={info.id} />
                </div>
            </div>
        )
    }
}

export default InfoBlock