import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';
import { getData } from "../../api/getApi";

const Top = () => {
    const { data } = getData('movie', 'top_rated', 1)
    const img = import.meta.env.VITE_HD_IMG
    if (data) {
        return (
            <div className="top">
                <h2 className="top_title">ТОП <span>10</span></h2>
                <Swiper
                    slidesPerView={3}
                    navigation={true}
                    modules={[Navigation]}
                    className="top_swiper"
                    spaceBetween={24}
                    grabCursor={true}
                    breakpoints={{
                        1300: {
                            slidesPerView: 3
                        },
                        800: {
                            slidesPerView: 2.8,
                            spaceBetween: 15
                        },
                        700: {
                            slidesPerView: 2.5
                        },
                        600: {
                            slidesPerView: 2.2
                        },
                        500: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        400: {
                            slidesPerView: 1.7
                        },
                        350: {
                            slidesPerView: 1.4
                        },
                        300: {
                            slidesPerView: 1.2
                        },
                    }}
                >
                    {
                        data.results.slice(0, 10).map((movie, i) => (
                            <SwiperSlide className="top_slide" key={movie.id}>
                                <h3 className="top_num">{i + 1}</h3>
                                <div className="top_img">
                                    <img src={img + movie.poster_path} alt="" />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        )
    }
}

export default Top