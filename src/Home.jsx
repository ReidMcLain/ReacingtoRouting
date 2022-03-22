import { Link, useNavigate } from 'react-router-dom';
const Home = () => {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    }

    return (
        <>
            <div className="d-flex flex-direction-row align-items-center" id="TotoroDiv"></div>
            <main className="container">
                <section className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h4 className="d-flex flex-direction-row align-items-center" id="frontPageCardTitle">Studio Ghibli API Lab</h4>
                                <p className="card-text">This labs shows off my understanding routing and fetching data through API's and routing the pages accordingly. :)</p>
                                <p className="text-muted">Check out more cool projects at https://github.com/ReidMcLain</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;