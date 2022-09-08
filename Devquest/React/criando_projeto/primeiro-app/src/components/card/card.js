import React from "react";
import './card.css'

//ou const Card = ({title})=> {
// return(
//     <div className="card">
//     <h3>{title}</h3>
/////////////////////////////////////////
// const Card = (props)=> {
//     return(
//         <div className="card">
//         <h3>{props.title}</h3>
//         <p>esse é um texto card</p>
//     </div>
//     )
// }
/////////////////////////////////////////////////////
const Card = ({ children, color, showCardColor }) => {
    return (
        <div className="card"
            style={{ backgroundColor: color }}
            onClick={() => showCardColor(color)}>
            {children}
        </div>
    )
}


Card.defaultProps = {
    color: 'orange'
}
// class Card extends React.Component {
//     render() {
//         console.log(this.props)
//         return (

//             <div className="card">
//                 <h3>{this.props.title}</h3>
//                 <p>esse é um texto card</p>
//             </div>
//         )
//     }
// }

export default Card