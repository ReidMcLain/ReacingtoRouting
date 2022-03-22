import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/Navbar';
import Home from './Home';
import PeopleCard from './pages/people';
import FilmCard from './pages/films';
import Totoro from './components/SGLogo.png';
import SingleFilm from "./pages/Film";
import SinglePerson from "./pages/Person";

const App = () => {

    return (
        <BrowserRouter>
            <div id="NavBar" className="col">
                <img id="TotoroPic" src={Totoro} />
                <NavBar />
            </div>
            <main className="container mt-5">
                <section className="row-justify-content-center">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/films" element={<FilmCard />} />
                        <Route path="/films/:filmid" element={<SingleFilm />} />
                        <Route path="/people" element={<PeopleCard />} />
                        <Route path="/people/:peopleid" element={<SinglePerson />} />
                    </Routes>
                </section>
            </main>
        </BrowserRouter>
    );
};

export default App;