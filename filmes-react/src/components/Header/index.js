import './header.css';
import { Link } from 'react-router-dom';
import Icone_Logo from './rolo_filme.png';

function Header(){
    return(
        <header>
            
            <img src={ Icone_Logo } alt='logo_rolo_filme.png'/> 
            <Link className='logo' to='/'>Filmes React</Link>
            <Link className='favoritos' to='/favoritos'>Filmes Favoritos</Link>

        </header>
    )
}

export default Header;