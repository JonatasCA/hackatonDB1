import { useEffect, useRef, useState } from 'react'
import '../header/home.scss'
import api from '../../services/api'
function Header() {

    const [produtos, setProdutos] = useState();

    function inputChange() {
        console.log(input.current.value);
    }

    useEffect(() => {
        async function loadData() {
            const {data: {result}} = await api.get('produtos')

            setProdutos(result)
            console.log(result)
        }

        loadData()
    }, [])

    const input = useRef();


    return ( 
        <header>
            <nav className='navigation'>
                <a  href="#" className='logo'>NetXoes</a>
                <div className='search-box'>
                <input type="text" className='search-txt' placeholder='O que você está buscando?' ref={input} onChange={inputChange}/>
                <a className='search-btn' href="#">
                <i className='fas fa-search'></i>
                </a>
                </div>
                <div className='btn-src-user'>
                    <ul className='nav-list'>

                        <li className='nav-item'><a href="#">Categorias</a></li>
                        <li className='nav-item'><a href="#">Favoritos</a></li>
                        <li className='nav-item'><a href="#">Entrar</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default Header