import {$host, $authHost} from "./index";
import jwt_decode from "jwt-decode";



export const createType = async (type) => {
    const {data} = await $host.post('api/type', type)
    return data
}


