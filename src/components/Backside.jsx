import React from "react";
/**
 * the backside of the players card which will display
 * the players batting avg, hrs, rbis and OPS
 */

const Backside = ({name, avg, hrs, rbi, ops})=> {

    return (
        <div className="Back">
            <h3>{name}</h3>
            <h4>Batting Average: {avg}</h4>
            <h4>Homeruns: {hrs}</h4>
            <h4> RBI: {rbi}</h4>
            <h4>OPS: {ops}</h4>
           
            
        </div>
    );
}
export default Backside;