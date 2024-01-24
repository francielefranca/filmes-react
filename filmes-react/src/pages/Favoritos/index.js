import { useEffect, useState } from 'react';
import './favoritos.css'
import { Link } from 'react-router-dom';
import Icone from './fav_icon.png';

function Favoritos(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        const minhaLista = localStorage.getItem('@filmesreact');
        setFilmes(JSON.parse(minhaLista) || [] )

    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item)=>{
            return(item.id !== id)
        });

        setFilmes(filtroFilmes);
        localStorage.setItem('@filmesreact', JSON.stringify(filtroFilmes));
        alert("Filme removido com sucesso");
    }

    return(
        <div className='meus-filmes'>
            
            <h1>Meus Filmes Favoritos</h1>
            <img src={ Icone } alt={ 'icone_fav.png' } />

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo.  </span> }

            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>

                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={()=> excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;