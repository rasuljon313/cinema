import { FC } from "react"
import { getData } from "../../api/getApi"
import infoStore from "../../store/infoId"
import Pagination from "./Pagination"
import Skleton from "./Skleton"
import { Link } from "react-router-dom"

interface IContentProps {
    type: string
}
const Content: FC<IContentProps> = ({ type }) => {
    const skleton = [...new Array(20)].map((_, i) => <Skleton key={i} />)
    const hdImg = import.meta.env.VITE_HD_IMG
    const { page } = infoStore()
    const { data } = getData(type, 'popular', page)
    return (
        <>
            <div className="content">
                {
                    data ?
                        data.results.map(movie => (
                            <Link to={`/${type}/${movie.id}`} className="content_card" key={movie.id}>
                                <img src={hdImg + movie.poster_path} alt="" />
                            </Link>
                        ))
                        : skleton
                }
            </div>
            <Pagination />
        </>
    )

}

export default Content