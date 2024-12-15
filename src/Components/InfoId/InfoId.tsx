import { useParams } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import infoStore from "../../store/infoId";
import { AxiosResponse } from "axios";
import axiosClient from "../../api/axiosClient";
import Actors from "../../UI/Actors";
import { IoPlay } from "react-icons/io5";
import Video from "./Video";

interface IProps {
    type: string
}
const InfoId: FC<IProps> = ({ type }) => {
    const [active, setActive] = useState(false)
    const fullImg = import.meta.env.VITE_FULL_IMG
    const hdImg = import.meta.env.VITE_HD_IMG
    const { id } = useParams()
    const { infoMovie, infoTv, setInfoMovie, setInfoTv, setActor, actors, setKey } = infoStore()
    useEffect(() => {
        getInfoById()
    }, [])
    const getInfoById = async () => {
        setInfoMovie(null)
        setInfoTv(null)
        const res: AxiosResponse<any> = await axiosClient.get(`${type}/${id}`)
        const credits: AxiosResponse<any> = await axiosClient.get(`${type}/${id}/credits`)
        type == 'movie' ? setInfoMovie(res) : setInfoTv(res)
        setActor(credits)
    }
    const getVideo = async (id: number) => {
        setActive(true)
        const res: { results: [{ key: string }] } = await axiosClient.get(`movie/${id}/videos`)
        setKey(res.results[0].key);
    }
    const info = type == 'movie' ? infoMovie : infoTv
    if (info) {

        return (
            <>

                <div className="infoid">
                    <div className="infoid_main infoblock_img">
                        <div className="infoid_main_bg">
                            <img src={fullImg + info.backdrop_path} alt="" />
                        </div>
                        <div className="infoid_main_img">
                            <img src={hdImg + info.poster_path} alt="" />
                        </div>

                    </div>
                    <div className="infoblock_descr infoid_descr">
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
                        {type == 'movie'
                            ?
                            <button className="infoid_btn" onClick={() => getVideo(info.id)}>
                                <IoPlay />
                                <span>Смотерть трейлер</span>
                            </button>
                            :
                            ""}
                    </div>
                    <div className="infoid_actors">
                        {actors.cast.slice(0, 6).map(actor => (
                            <Actors actor={actor} key={actor.id} />
                        ))}
                    </div>
                </div>
                <div className="budget">
                    <div className="budget_card">
                        <h2 className="budget_title">Бюджет</h2>
                        <p className="budget_text"> {info.budget ? `$` + info.budget.toLocaleString() : null}</p>
                    </div>
                    <div className="budget_card">
                        <h2 className="budget_title">Сборы</h2>
                        <p className="budget_text"> {info.revenue ? `$` + info.revenue.toLocaleString() : null}</p>
                    </div>
                    <div className="budget_card">
                        <h2 className="budget_title">Статус</h2>
                        <p className="budget_text">{info.status}</p>
                    </div>
                    <div className="budget_card">
                        <h2 className="budget_title">Исходное название</h2>
                        <p className="budget_text">{info.original_title ? info.original_title : info.original_name}</p>
                    </div>
                </div>
                <Video active={active} setActive={setActive}/>
            </>
        )
    }
}

export default InfoId