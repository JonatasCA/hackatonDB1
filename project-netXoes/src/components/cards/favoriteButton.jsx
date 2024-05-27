import React, { useState, useEffect } from 'react';
import './favoriteButton.scss';

function FavoriteButton({ productId }) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
        if (favoriteProducts.includes(productId)) {
            setIsFavorite(true);
        }
    }, [productId]);

    const handleFavoriteClick = () => {
        let favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];

        if (isFavorite) {
            favoriteProducts = favoriteProducts.filter(id => id !== productId);
        } else {
            favoriteProducts.push(productId);
        }

        localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
        setIsFavorite(!isFavorite);
    };

    return (
        <button className={`favorite-button ${isFavorite ? 'favorite' : ''}`} onClick={handleFavoriteClick}>
            {isFavorite ? '❤' : '♡'}
        </button>
    );
}

export default FavoriteButton;