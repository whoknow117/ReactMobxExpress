import {$host, $authHost} from "./index";


export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}


export const fetchTypes = async () => {
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


export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}


export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}


export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const updateDevice = async ({id, name,price, aliasName,quantity, article}) => {
    const {data} = await $authHost.patch('api/device', {
        id, name,price, aliasName,quantity, article
    })
    return data
}

export const fetchInfosTypeKey = async (typeId) => {
    const {data} = await $host.get('api/info', {
        params: {
            typeId
        }
    })

    return data
}

export const fetchAvailbale = async () => {
    const {data} = await $host.get('api/available/')
    return data
}



export const fetchDevices = async (typeId, brandId, categoryId,  honey, name, page, limit) => {
    const {data} = await $host.get('api/device', {
        params: {
            typeId,
            brandId,
            honey,
            categoryId,
            name,
            page,
            limit
        }
    })
    return data
}


export const deleteDevice = async (id) => {
    const {data} = await $authHost.delete('api/device/', {

        params: {
            id
        }
    })
    return data
}

export const fetchDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

export const fetchUnits = async () => {
    const {data} = await $host.get('api/unit/')
    return data
}
