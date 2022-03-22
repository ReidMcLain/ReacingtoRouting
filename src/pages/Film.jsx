import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";

const SingleFilm = () => {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    }

    const { filmid } = useParams();

    const [film, setFilm] = useState({});

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(data => setFilm(data))
            .catch(e => alert(e.message));
    }, [filmid]);

    return (
        <>
            <main className="container">
                <section className="row justify-content-center mt-5">
                    <div className="col-md-3" key={`user-card-${film.id}`}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <div><img className="moviePosters card-img-top" src={film.image}/></div>
                                <hr/>
                                <h4 className="card-title">{film.title}</h4>
                                <hr />
                                <p className="card-text"><span className="text-muted">Produced by </span>{film.producer}</p>
                                <hr />
                                <p className="card-text"><span className="text-muted">Directed by </span>{film.director}</p>
                                <hr />
                                <p className="card-text"><span className="text-muted">Released in </span>{film.release_date}</p>
                                <hr />
                                <p className="card-text"><span className="text-muted">Rotten Tomato Score </span>{film.rt_score > 50 ? <span className="text-success">{film.rt_score}</span> : <span className="text-danger">{film.rt_score}</span> }</p>
                                <hr />
                                <p className="card-text">{film.description}</p>
                                <button onClick={() => navigate(-1)} className="btn btn-primary btn-sm">Go Back</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default SingleFilm;