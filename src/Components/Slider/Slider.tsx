import { FC, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";

import 'swiper/css/navigation';
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
import { getData } from "../../api/getApi";
import InfoBlock from "../InfoBlock/InfoBlock";
import axiosClient from "../../api/axiosClient";
import infoStore from "../../store/infoId";
import { AxiosResponse } from "axios";
const hdImg = import.meta.env.VITE_HD_IMG
interface ISliderProps {
    type: string
}
const Slider: FC<ISliderProps> = ({ type }) => {
    const { data } = getData(type, 'popular', 1)

    const [active, setActive] = useState(false)
    const { setInfoMovie, setInfoTv, setActor } = infoStore()
    const getId = async (id: number, type: string) => {
        setInfoMovie(null)
        setInfoTv(null)
        setActive(false)
        const res: AxiosResponse<any> = await axiosClient(`${type}/${id}`)
        let res2 = await axiosClient.get(`${type}/${id}/credits`)
        setActive(true)
        setActor(res2)
        type == 'movie' ? setInfoMovie(res) : setInfoTv(res)
    }
    const { infoMovie, infoTv, actors } = infoStore()
        if (data) {

        return (
            <>
                <div className="slider">
                    <h2 className="slider_title">{type == 'movie' ? "Фильмы" : "Сереалы"} <SlArrowRight /></h2>
                    <Swiper
                        slidesPerView={5.5}
                        spaceBetween={24}
                        grabCursor={true}
                        modules={[Navigation]}
                        navigation={true}
                        breakpoints={{
                            1700: {
                                slidesPerView: 5,
                            },
                            1500: {
                                slidesPerView: 4.5,
                            },
                            1300: {
                                slidesPerView: 4,
                            },
                            1100: {
                                slidesPerView: 3.5,
                            },
                            700: {
                                slidesPerView: 3,
                            },
                            500: {
                                slidesPerView: 2.5,
                            },
                            400: {
                                slidesPerView: 2.2,
                            },
                            370: {
                                slidesPerView: 2,
                            },
                            320: {
                                slidesPerView: 1.8,
                            },
                        }}
                    >
                        {data.results.map(info => (
                            <SwiperSlide className="slider_slide" key={info.id} onClick={() => getId(info.id, type)}>
                                <img src={`${hdImg}${info.poster_path}`} alt="" />
                            </SwiperSlide>
                        ))}
                        <SwiperSlide className="slider_slide">
                            <Link to={`${type}`} className="slider_slide_link">
                                <span><SlArrowRight /></span>
                                <h3 className="slider_slide_title">Все {type == 'movie' ? "Фильмы" : "Сереалы"}</h3>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <InfoBlock actors={actors} active={active} setActive={setActive} type={type} info={type == 'movie' ? infoMovie : infoTv} />
            </>
        )
    }
}

export default Slider