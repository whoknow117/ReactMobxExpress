import {$host, $authHost} from "./index";




export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}


export const fetchTypes = async ( ) => {
    const {data} = await $host.get('api/type')
    return data
}
export const fetchCategories = async () => {
    const {data} = await $host.get('api/category')
    return data
}
export const createCategories = async (category) => {
    const {data} = await $authHost.post('api/category', category)
    return data
}

export const fetchInfos = async () => {
    const {data} = await $host.get('api/info')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}


export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand' )
    return data
}


export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}


export const fetchDevices = async (typeId,brandId,categoryId,page, limit ) => {
    const {data} = await $host.get('api/device',{
        params:{
            typeId,
            brandId,
            categoryId,
            page,
            limit
        }
    })
    return data
}

export const fetchDevice = async (id ) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}
// export const fetchSubDevice = async (typeId ) => {
//     const {data} = await $host.get('api/device/' + id)
//     return data
// }