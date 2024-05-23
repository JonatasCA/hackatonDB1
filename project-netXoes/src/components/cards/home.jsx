import './home.scss'

function Card({produtoData}) {


    return ( 
        // <p>{produtoData.name}, {produtoData.price}, {produtoData.id}, {produtoData.description}, {produtoData.price} </p>
        <div>
            <div className='wrapper-full'>
                <a href="#">
                <div className='wrapper-image'>
                    <img src={produtoData.image} alt="Imagem do produto selecionado" className='image' />
                </div>
                <div className='wrapper-text'>
                    <div className='wrapper-name'>
                        <h3>{produtoData.name}</h3>
                    </div>
                    <div className='wrapper-price'>
                        <p>A partir de <br /><b>R$ {produtoData.price}</b></p>
                    </div>
                </div>
                </a>
            </div>
        </div>
        
    )
}



export default Card