import "./Card.css";

const Card = ({ card, handleChoice }) => {
    const handleClick = () => {
        handleChoice(card);
    };

    return (
        <div className="card">
            <div>
                <img className="front" src={card.src} alt="Card Front" />
                <img
                    className="back"
                    onClick={handleClick}
                    src="/images/cover.png"
                    alt="Card Back"
                />
            </div>
        </div>
    );
};

export default Card;
