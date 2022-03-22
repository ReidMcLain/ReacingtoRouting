import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const FilmCard = (props) => {

    const { userid } = useParams();

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    }
    
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(data => setFilms(data))
            .catch(e => alert(e.message));
    }, []);

    return (
        <>
            <div className="col-md-6">
            <ul className="list=group">
                {films.map((film) => (
                    <li
                        key={`film-${film.id}`}
                        className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{film.title}</span>
                        <Link to={`/films/${film.id}`} className="btn btn-outline-primary">
                            Full Details
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default FilmCard;