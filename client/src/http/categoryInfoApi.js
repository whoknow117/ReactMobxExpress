import {$host, $authHost} from "./index";


export const createInfo = async (info) => {
    const {data} = await $authHost.post('api/info', info)
    return data

}


export const fetchInfos = async () => {
    const {data} = await $host.get('api/info')
    return data
}