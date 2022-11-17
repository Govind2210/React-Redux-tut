import { Add_To_cart , Remove_To_cart } from "../Constant";

const initialState = {
  cardData: [],
};

export default function cardItem(state = [], action) {
  switch (action.type) {
    case Add_To_cart:
        // console.warn("reducer" , action)
      return [
        ...state,
        {cardData: action.data}      ]
      break
      case Remove_To_cart:
        // console.warn("reducer" , action)
        state.pop()
      return [
        ...state,  
         ]
      break
    default:
        return state 
      
  }
}
