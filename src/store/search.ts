import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IMovie } from "../api/getApi";

interface ISearchInfo {
    search: string
    setSearch: (search: string) => void,
    setMovie: (data: IMovie[] | null) => void
    movie: IMovie[] | null
}
const searchInfo = create<ISearchInfo>()(devtools(
    (set) => ({
        movie: null,
        search: "",
        setSearch: (data) => set({ search: data }),
        setMovie: (data) => set({ movie: data }),
    })))

export default searchInfo