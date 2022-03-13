import "./Card.css";

const Card = ({ card, handleChoice }) => {
    return (
        <div className="card">
            <div>
                <img className="front" src={card.src} alt="Card Front" />
                <img
                    className="back"
                    onClick={handleChoice(card)}
                    src="/images/cover.png"
                    alt="Card Back"
                />
            </div>
        </div>
    );
};

export default Card;
