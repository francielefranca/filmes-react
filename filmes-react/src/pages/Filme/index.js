import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './filme.css';

//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=d167ca8a3cb54ed4cbaa9f9737a5a732
import api from '../../services/api';

function Filme(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: 'd167ca8a3cb54ed4cbaa9f9737a5a732',
                    language: 'pt-BR',
                }
            })

            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                navigate('/', { replace: true });
                return;
            })
        }

        loadFilme();


        return () => {
            console.log('Componente foi desmontado');
        }
    }, [navigate, id])

    function salvarfilme(){
        const minhaLista = localStorage.getItem('@filmesreact');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvo)=> filmesSalvo === filme.id)

        if(hasFilme){
            alert('Filme já na lista...');
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('@filmesreact', JSON.stringify(filmesSalvos));
        alert('Filme salvo com sucesso!')


    }

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            
            <h3>Sinopse</h3>
            <span>{ filme.overview }</span>

            <strong>Avaliação: { filme.vote_average } / 10 </strong>

            <div className='area-buttons'>
                <button onClick={salvarfilme}>Salvar</button>
                <button>
                    <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>

            </div>


        </div>
    )
}

export default Filme;