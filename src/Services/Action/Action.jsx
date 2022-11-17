import { Add_To_cart } from "../Constant"
import { Remove_To_cart } from "../Constant"

export const addTocart = (data) =>{
    // console.log("Action" , data )
    return{
        type : Add_To_cart,
        data :data
    }
}

export const RemoveTocart = () =>{
        console.log("remove"  )

    return{
        type : Remove_To_cart,
        
    }
}