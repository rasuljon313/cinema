import { create } from "zustand";
import { devtools } from "zustand/middleware";
export type info = {
    title?: string
    name?: string
    backdrop_path?: string
    overview?: string
    genres: [{ name: string }]
    release_date?: string
    runtime: number
    id: number
    poster_path: string
    revenue: number
    budget: number
    status: string
    original_title: string
    original_name: string
}
interface IInfoStore {
    infoMovie: info | null
    infoTv: info | null
    actors: { cast: [{ original_name: string, profile_path: string, id: number }] }
    setActor: (data: any) => void
    setInfoMovie: (data: any) => void
    setInfoTv: (data: any) => void
    page: number
    setPage: (num: number) => void
    search: string
    setSearch: (search: string) => void
    key: string
    setKey: (data: string) => void
}

const infoStore = create<IInfoStore>()(devtools(
    (set) => ({
        key: '',
        infoMovie: null,

        infoTv: null,
        actors: { cast: [{ original_name: '', profile_path: '', id: 0 }] },
        page: 1,
        setKey: (data) => set({ key: data }),
        setPage: (num) => set({ page: num }),
        setActor: (data) => set({ actors: data }),
        setInfoMovie: (data) => set({ infoMovie: data }),
        setInfoTv: (data) => set({ infoTv: data }),
        search: "",
        setSearch: (data) => set({ search: data }),
    })))

export default infoStore