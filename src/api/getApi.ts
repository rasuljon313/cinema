import { QueryFunction, UseQueryResult, useQuery } from "@tanstack/react-query"
import axiosClient from "./axiosClient"
export interface IMovie {
    id: number,
    backdrop_path: string,
    release_date: string,
    original_title: string,
    overview: string
    name?: string
    title?: string
    poster_path: string


}
interface IData {
    results: IMovie[]
}
const getInfo: QueryFunction<IData> = async ({ queryKey }) => {
    const type = queryKey[1]
    const info = queryKey[2]
    const page = queryKey[3]
    const response: IData = await axiosClient.get(`${type}/${info}?page=${page}`)
    return response
};
export const getData = function (type: string, info: string, page: number): UseQueryResult<IData, Error> {
    return useQuery({ queryKey: ['upcoming', type, info, page], queryFn: getInfo })
}



