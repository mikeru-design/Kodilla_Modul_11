import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import Favorite from "./components/Favorite/Favorite";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import { Routes, Route } from 'react-router-dom';
import Page404 from "./components/Page404/Page404";


const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Container>
 </main>
  );
};

export default App;
