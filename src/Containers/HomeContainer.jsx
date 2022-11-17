import {connect} from 'react-redux'
import Home from '../Components/Home'
import { addTocart , RemoveTocart } from '../Services/Action/Action'


const mapSateToProps = state=>({
    cardData : state.cardItem
})


const mapDistpatchToProps = dispatch=>({
    addToCartHandler:data=>dispatch(addTocart(data)),
    RemoveTocartHandler:data=>dispatch(RemoveTocart(data))
})



export default connect(mapSateToProps , mapDistpatchToProps)(Home)