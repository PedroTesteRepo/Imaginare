import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Colaboradores from './pages/Colaboradores';
import Contatos from './pages/Contatos';
import Termos from './pages/Termos';
import Formulario from './pages/Formulario';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/colaboradores" element={<Colaboradores />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/formulario" element={<Formulario />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
