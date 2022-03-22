import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const PeopleCard = (props) => {
    
    const { userid } = useParams();

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    }

    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(data => setPeople(data))
            .catch(e => alert(e.message));
    }, []);

    return (
        <div className="col-md-6">
            <ul className="list=group">
                {people.map((people) => (
                    <li
                        key={`people-${people.id}`}
                        className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{people.name}</span>
                        <Link to={`/peoples/${people.id}`} className="btn btn-outline-primary">
                            Full Details
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PeopleCard;