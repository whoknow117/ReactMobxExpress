import {$host, $authHost} from "./index";


export const createInfo = async (info) => {
    const {data} = await $authHost.post('api/info', info)
    return data

}


export const fetchInfos = async (typeId) => {
    const {data} = await $host.get('api/info', {
        params: {
            typeId
        }
    })
    return data
}