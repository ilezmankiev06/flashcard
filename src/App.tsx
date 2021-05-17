import React, { useState } from 'react';
import './App.css';
import Flashcard from "./FlashcardList"
import { questions } from "../src/data"

function App() {
  const [cards, setCards] = useState(questions);
  return (
    <Flashcard flashcards={cards} />
  );
}

export default App;
