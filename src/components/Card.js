import "./Card.css";

const Card = ({ card }) => {
    return (
        <div className="card">
            <div>
                <img className="front" src={card.src} alt="Card Front" />
                <img className="back" src="/images/cover.png" alt="Card Back" />
            </div>
        </div>
    );
};

export default Card;
