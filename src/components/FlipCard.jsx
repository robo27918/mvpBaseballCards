
const FlipCard = ({onClick}) => {
    return (
        <div className="flipCard" onClick={onClick}>
            <div className="card-front"> Front of card</div>
            <div className="card-back">Back of card</div>
        </div>
    );
}
export default FlipCard;