import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";

const SinglePerson = () => {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    }

    const { peopleid } = useParams();

    const [people, setPeople] = useState({});

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
            .then(res => res.json())
            .then(data => setPeople(data))
            .catch(e => alert(e.message));
    }, [peopleid]);

    return (
        <>
            <main className="container">
                <section className="row justify-content-center mt-5">
                    <div className="col-md-6" key={`user-card-${people.id}`}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h4 className="card-title">{people.name}</h4>
                                <hr />
                                <p className="card-text"><span className="text-muted">Gender </span>{people.gender}</p>
                                <hr />
                                <p className="card-text"><span className="text-muted">Age </span>{people.age}</p>
                                <hr />
                                <p className="card-text"><span className="text-muted">Hair Color </span>{people.hair_color}</p>
                                <hr />
                                <p className="card-text"><span className="text-muted">Eye Color </span>{people.eye_color}</p>
                                <button onClick={() => navigate(-1)} className="btn btn-primary btn-sm">Go Back</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default SinglePerson;