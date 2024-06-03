import { Link } from 'react-router-dom';
import FavoriteButton from './favoriteButton';
import './cards.scss';

function Card({ produtoData }) {
        // <p>{produtoData.name}, {produtoData.price}, {produtoData.id}, {produtoData.description}, {produtoData.price} </p>
    return (
        <div>
            <div className='wrapper-full'>
                <div className='wrapper-image'>
                    <img src={`./products/${produtoData.image}`} alt={produtoData.name} className='image' />
                    <div className='button-favorite'>
                        <FavoriteButton productId={produtoData.id} produtoData={produtoData} />
                    </div>
                </div>
                <div className='wrapper-text'>
                    <div className='wrapper-name'>
                        <h3>{produtoData.name}</h3>
                    </div>
                    <div className='wrapper-price'>
                        <p>A partir de <br /><b>R$ {produtoData.price}</b></p>
                    <Link to={`/product/${produtoData.id}`} className='button-details'>
                        <button className='details'>
                            Detalhes
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;