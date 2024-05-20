import { useEffect } from 'react'
import './home.scss'
import api from '../services/api'
function Home() {

    useEffect(() => {
        async function loadData() {
            const {data: {result}} = await api.get('produtos')

            console.log(result)
        }

        loadData()
    }, [])


    return ( 
        <header>
            <nav className='navigation'>
                <a  href="#" className='logo'>NetXoes</a>
                <div className='search-box'>
                <input type="text" className='search-txt' placeholder='O que você está buscando?' />
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


export default Home