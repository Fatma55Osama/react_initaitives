import { store_employess } from "../API/store_employess"
import { store_Infograph } from "../API/store_Infograph"

export const getAllData ={
    get_all_employess:async(domain)=>{
        return await store_employess(domain)
    },
    get_allmainpage_infograph:async(domain)=>{
        return await store_Infograph(domain)
    }
}