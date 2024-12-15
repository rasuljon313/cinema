
import { FC, useRef, useState } from 'react';
import { getData } from '../../api/getApi';
import UpcomingItem from './UpcomingItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, } from 'swiper/modules';

const hdImg = import.meta.env.VITE_HD_IMG
import 'swiper/css';
import Loader from '../../UI/Loader';
const Upcoming: FC = () => {
    const { data, isLoading, isFetching } = getData('movie', 'upcoming', 1)

    const line = useRef<HTMLElement>(null)
    const [next, setNext] = useState(1)
    const onAutoplayTimeLeft = (_: {}, __: number, progress: number) => {
        if (line.current) {
            line.current.style.width = `${(1 - progress) * 100}%`
        }
    }
    if (isLoading || isFetching) {
        return <Loader />
    }
    if (data) {

        const changeSlide = () => {
            if (data.results.length - 1 == next) {
                setNext(0)
            } else {
                setNext(next + 1)
            }
        }

        return (
            <Swiper
                className='upcoming'
                loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                navigation={{ nextEl: '.upcoming_next' }}
                onSlideChangeTransitionEnd={changeSlide}
                breakpoints={{
                    0: {
                        allowTouchMove: true
                    },
                    600: {
                        allowTouchMove: false
                    }
                }}
            >
                {
                    data.results.map((upcoming) => (
                        <SwiperSlide className='upcoming_item' key={upcoming.id}>
                            <UpcomingItem
                                upcoming={upcoming}
                            />
                        </SwiperSlide>
                    ))
                }
                <div className="upcoming_next" >
                    <img src={`${hdImg}${data.results[next].backdrop_path}`} alt="" />
                    <p className="upcoming_next_text">Следующий</p>
                    <h2 className="upcoming_next_title">Тор: {data.results[next].title}</h2>
                    <div className="upcoming_next_line" >
                        <span ref={line}></span>
                    </div>
                </div>
            </Swiper>
        )
    }

}

export default Upcoming