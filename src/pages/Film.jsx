import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const SingleFilm = () => {

    const { filmid } = useParams();

    const [film, setFilm] = useState({});

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(data => setFilm(data))
            .catch(e => alert(e.message));
    }, [filmid]);

    return (
        <h1>single film</h1>
    )
}

export default SingleFilm;