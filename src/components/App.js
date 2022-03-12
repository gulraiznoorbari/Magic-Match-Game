import { useState } from "react";
import "./App.css";
import Card from "./Card";

const cardImages = [
    { src: "/images/helmet-1.png" },
    { src: "/images/potion-1.png" },
    { src: "/images/ring-1.png" },
    { src: "/images/scroll-1.png" },
    { src: "/images/shield-1.png" },
    { src: "/images/sword-1.png" },
];

const App = () => {
    const [turns, setTurns] = useState(0);
    const [cards, setCards] = useState([]);

    // shuffle cards:
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        setCards(shuffledCards);
        setTurns(0);
    };

    return (
        <div className="App">
            <h1>Magic Match</h1>
            <button onClick={shuffleCards}>New Game</button>

            <div className="card-grid">
                {cards.map((card) => (
                    <Card key={card.id} card={card} />
                ))}
            </div>
        </div>
    );
};

export default App;
