import React from "react";
import Flashcard from "./Flashcard";

const FlashcardList = ({ flashcards }) => {
    return (
        <div className="card-grid">
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcards.id} />
            })}
        </div>
    )
}

export default FlashcardList;