import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CardDetail = ({ cards }) => {
    const { id } = useParams();
    const card = cards.find((card) => card.id.toString() === id);

    if (!card) {
        return <h2>Card not found!</h2>;
    }

    return (
        <div>
            <Link to="/">Back to All Cards</Link>
            <h1>{card.title}</h1>
            <img src={card.image.url} alt={card.title} />
            <p>{card.subtitle}</p>
            <p><strong>Email:</strong> {card.email}</p>
            <p><strong>Phone:</strong> {card.phone}</p>
            <p><strong>Website:</strong> <a href={card.website} target="_blank" rel="noopener noreferrer">{card.website}</a></p>
            <p><strong>Address:</strong> {card.address}</p>
        </div>
    );
};

export default CardDetail;