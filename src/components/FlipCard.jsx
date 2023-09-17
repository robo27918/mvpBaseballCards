import React,{useState} from "react";
import ReactCardFlip from "react-card-flip";
/***
 *  This was originally returned by the FlipCard component. Here for
 *  reference only.....
 *   <div>
            Front of card
            <button onClick={handleClick}>Click to flip</button>
          </div>

          <div>
              This is the back of the Card
              <button onClick={handleClick}>Click to flip</button>
         </div>
 */
const FlipCard = ({front, back})=>{
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () =>{
        setIsFlipped((prevIsFlipped) => !prevIsFlipped);
    };
    
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection={"horizontal"}>
        <div>
          {front}
          <button className="FlipButton" onClick={handleClick}>Click to flip</button>
        </div>
        

        <div>
          {back}
          <button onClick={handleClick}>Click to flip</button>
        </div>
        
        
        

        </ReactCardFlip>
    );
}
export default FlipCard;