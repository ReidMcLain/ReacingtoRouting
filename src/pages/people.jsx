import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const PeopleCard = (props) => {
    
    const { userid } = useParams();

    const navigate = useNavigate();

    const [details, setDetails] = useState(null);

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

    if (!details) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="col-md-6">
            <ul className="list=group">
                {people.map((people) => (
                    <li
                        key={`people-${people.id}`}
                        className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{people.peoplename}</span>
                        <Link to={`/peoples/${people.id}`} className="btn btn-outline-primary">
                            Full Details
                        </Link>
                        <Link to="/">Home</Link>
                        <button onClick={handleHomeClick}>Go Back Home ... Imperatively ;)</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PeopleCard;