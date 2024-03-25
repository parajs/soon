import axios from '../utils/request'

const baseUrl = process.env.EXPO_PUBLIC_API_URL;

interface Params extends Record<string,any> {}

export function views(params?: Params) {
    return axios.get(`${baseUrl}/api/wallpaper/views?type=json`,{ params })
}

