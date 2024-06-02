import { createContext, useContext, useState, useEffect } from "react";
import api from '../services/api.js';

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        const favoriteIds = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
        if (favoriteIds.length > 0) {
            api.get('/produtos', {
                params: { ids: favoriteIds.join(',') }
            }).then(response => {
                const { result } = response.data;
                setFavorite(result);
            }).catch(error => {
                console.error('Erro ao buscar produtos favoritos:', error);
            });
        }
    }, []);

    function addFavorite(newFavorite) {
        const isFavorite = favorite.some(item => item.id === newFavorite.id);

        let newList;
        if (isFavorite) {
            newList = favorite.filter(item => item.id !== newFavorite.id);
        } else {
            newList = [...favorite, newFavorite];
        }
        setFavorite(newList);
        localStorage.setItem('favoriteProducts', JSON.stringify(newList.map(item => item.id)));
    }

    return (
        <FavoritesContext.Provider value={{ favorite, addFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavoriteContext() {
    return useContext(FavoritesContext);
}