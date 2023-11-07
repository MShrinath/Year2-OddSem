import React, { useState } from 'react';

const CardList = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Card 1', content: 'This is the content of Card 1.' },
    { id: 2, title: 'Card 2', content: 'This is the content of Card 2.' },
    { id: 3, title: 'Card 3', content: 'This is the content of Card 3.' },
  ]);

  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardContent, setNewCardContent] = useState('');

  const handleAddCard = () => {
    const newCard = {
      id: cards.length + 1,
      title: newCardTitle,
      content: newCardContent,
    };
    setCards([...cards, newCard]);
    setNewCardTitle('');
    setNewCardContent('');
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {cards.map((card) => (
          <div key={card.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter content"
            value={newCardContent}
            onChange={(e) => setNewCardContent(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={handleAddCard}>
            Add Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardList;