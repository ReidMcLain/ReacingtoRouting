import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/Navbar';
import Home from './Home';
import PeopleCard from './pages/people';
import FilmCard from './pages/films';
import Totoro from './components/SGLogo.png'

const App = () => {



    return (
        <BrowserRouter>
            <NavBar />
             <img id="TotoroPic" src={Totoro} />
            <main className="container mt-5">
                <section className="row-justify-content-center">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/films" element={<FilmCard />} />
                        <Route path="/people" element={<PeopleCard />} />
                    </Routes>
                </section>
            </main>
        </BrowserRouter>
    );
};

export default App;