import {connect} from 'react-redux'
import Header from '../Components/Header'
// import { addTocart } from '../Services/Action/Action'


const mapSateToProps = state=>({
    cardData : state.cardItem
})


const mapDistpatchToProps = dispatch=>({


})


export default connect(mapSateToProps , mapDistpatchToProps)(Header)