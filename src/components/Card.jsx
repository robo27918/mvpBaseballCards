import React from "react";

/**
 * 
 * @returns a card that includes a particular players picture and the name at the bottom
 * and below the name a link to the players baseball reference weblink...
 */

const Card = (props)=> {
    return(
        <div className="Card">
            <img src={props.imgLink}/>
            <h3>{props.name}</h3>
            <h4>{props.team}</h4>
            
        </div>
    )
}
export default Card;