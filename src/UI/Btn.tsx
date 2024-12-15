import { FC } from 'react'
import { HiMiniBars3BottomLeft } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
interface IProps {
    type: string
    id: number
}
const Btn: FC<IProps> = ({ type, id }) => {

    return (
        <Link to={`/${type}/${id}`} className="btn">
            <HiMiniBars3BottomLeft />
            Подробнее
        </Link>
    )
}

export default Btn

