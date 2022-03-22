import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PeopleCard = (props) => {

    const navigate = useNavigate();

    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(data => setPeople(data))
            .catch(e => alert(e.message));
    }, []);

    return (
        <div className="col">
            <ul className="list=group">
                {people.map((people) => (
                    <li
                        key={`people-${people.id}`}
                        className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{people.name}</span>
                        <Link to={`/people/${people.id}`} className="btn btn-outline-primary">
                            Person Info
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PeopleCard;