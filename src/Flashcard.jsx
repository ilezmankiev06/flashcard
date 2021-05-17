import React, { useState } from "react";

const Flashcard = ({ flashcard }) => {
    const [flip, setFlip] = useState(false);

    return (
        <div className="card" onClick={() => setFlip(!flip)}>
            <div className="text">
            { flip ? flashcard.reponse : flashcard.question }
            </div>
        </div>
    )
}

export default Flashcard;