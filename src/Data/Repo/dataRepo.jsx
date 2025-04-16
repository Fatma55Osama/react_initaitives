import { store_employess } from "../API/store_employess"
import { store_Importantlink } from "../API/store_Importantlink"
import { store_Infograph } from "../API/store_Infograph"
import { store_newes } from "../API/store_newes"

export const getAllData ={
    get_all_employess:async(domain)=>{
        return await store_employess(domain)
    },
    get_allmainpage_infograph:async(domain)=>{
        return await store_Infograph(domain)
    },
    get_allimportant_link:async(domain)=>{
        return await store_Importantlink(domain)
    },
    get_allnews :async(domain)=>{
        return await store_newes(domain)
    }
}