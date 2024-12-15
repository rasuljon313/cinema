import { useDebounce } from "use-debounce"
import axiosClient from "../api/axiosClient"
import { IMovie } from "../api/getApi"
import searchInfo from "../store/search"
import { useEffect } from "react"
interface IData {
  results: IMovie[]
}
const Search = () => {

  const { search, setSearch, setMovie, movie } = searchInfo()
  const [value] = useDebounce(search, 1000)
  const getSearch = async (value: string = "") => {
    const res: IData = await axiosClient.get(`search/multi?page=1&query=${value}`)
    const response = res.results.filter(movie => movie.poster_path)
    setMovie(response)
  }
  useEffect(() => {
    getSearch(value)
  }, [value])
  const hdImg = import.meta.env.VITE_HD_IMG

  return (
    <>
      <div className="movie">
        <div className="container">
          <input
            type="text"
            className="input"
            placeholder="Найти фильм, сериал..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="content"> {
            movie?.map(move => (
              <div className="content_card" key={move.id}>
                <img src={hdImg + move.poster_path} alt="" />
              </div>
            ))
          }</div>
        </div>
      </div>
    </>
  )
}

export default Search

// const obj1 = { name: "alisher" }
// const obj2 = { ...obj1 }
// // const obj2 = JSON.stringify(obj1)
// // console.log(JSON.parse(obj2));
// const obj3 = Object.assign(obj1)
// // console.log(obj3);



