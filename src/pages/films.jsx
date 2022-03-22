import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FilmCard = () => {

    const navigate = useNavigate();

    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(data => setFilms(data))
            .catch(e => alert(e.message));
    }, []);

    return (
        <>
            <div className="col">
                <ul className="list=group">
                    {films.map((film) => (
                        <li
                            key={`film-${film.id}`}
                            className="list-group-item d-flex justify-content-between align-items-center">
                            <span>{film.title}</span>
                            <Link to={`/films/${film.id}`} className="btn btn-outline-primary">
                                Movie Info
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default FilmCard;