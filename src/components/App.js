import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

const cardImages = [
    { src: "/images/helmet-1.png", matched: false },
    { src: "/images/potion-1.png", matched: false },
    { src: "/images/ring-1.png", matched: false },
    { src: "/images/scroll-1.png", matched: false },
    { src: "/images/shield-1.png", matched: false },
    { src: "/images/sword-1.png", matched: false },
];

const App = () => {
    const [turns, setTurns] = useState(0);
    const [cards, setCards] = useState([]);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);

    // shuffle cards:
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        setCards(shuffledCards);
        setTurns(0);
    };

    // handle a choice:
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };

    // reset choices and increment number of turns:
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns((turn) => turn + 1);
    };

    // comparing choices:
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            choiceOne.src === choiceTwo.src
                ? setCards((prevCards) =>
                      prevCards.map((card) =>
                          card.src === choiceOne.src ? { ...card, matched: true } : card,
                      ),
                  ) && resetTurn()
                : resetTurn();
        }
    }, [choiceOne, choiceTwo]);

    return (
        <div className="App">
            <h1>Magic Match</h1>
            <button onClick={shuffleCards}>New Game</button>

            <div className="card-grid">
                {cards.map((card) => (
                    <Card key={card.id} card={card} handleChoice={handleChoice} />
                ))}
            </div>
        </div>
    );
};

export default App;
