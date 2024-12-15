import { FC } from "react"
import { IoClose } from "react-icons/io5";
import infoStore from "../../store/infoId"
interface IProps {
    active: boolean
    setActive: (data: boolean) => void
}

const Video: FC<IProps> = ({ active, setActive }) => {
    const { key } = infoStore()
    return (
        <div className={`video ${active && 'active'}`}>
            <button className="video_close" onClick={() => setActive(false)}>
                <IoClose />
            </button>
            <iframe width="1156" height="650" src={`https://www.youtube.com/embed/${key}`}
            ></iframe>
        </div>
    )
}

export default Video