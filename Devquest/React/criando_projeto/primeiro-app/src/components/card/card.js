import React from "react";
import './card.css'


class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <h3>Titulo</h3>
                <p>esse é um texto card</p>
            </div>
        )
    }
}

export default Card