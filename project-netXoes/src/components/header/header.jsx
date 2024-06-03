import { useRef } from 'react'
import { Link } from 'react-router-dom';
import '../header/header.scss'

function Header({produtos, setProdutosFiltrados}) {

    const input = useRef();
    
    function inputChange() {
        const novosProdutos = produtos.filter( produto => produto.name.toLowerCase().includes(input.current.value.toLowerCase()))
        console.log(input.current.value);
        setProdutosFiltrados(novosProdutos)
    }

    return ( 
        <header>
            <nav className='navigation'>
                <Link  to="/" className='logo'>NetXoes</Link>
                <div className='search-box'>
                    <input type="text" className='search-txt' placeholder='O que você está buscando?' ref={input} onChange={inputChange}/>
                    <Link className='search-btn' to="/">
                        <i className='fas fa-search'></i>
                    </Link>
                </div>
                <div className='btn-src-user'>
                    <ul className='nav-list'>
                        <li className='nav-item'><Link to="/categories">Categorias</Link></li>
                        <li className='nav-item'><Link to="/favorites">Favoritos</Link></li>
                        <li className='nav-item'><Link to="/login">Entrar</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default Header