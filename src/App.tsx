import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Colaboradores from './pages/Colaboradores';
import Contatos from './pages/Contatos';
import Termos from './pages/Termos';
import Formulario from './pages/Formulario';

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    const element = document.querySelector('main');
    if (element) {
      element.style.opacity = '0';
      setTimeout(() => {
        element.style.transition = 'opacity 0.3s ease-in-out';
        element.style.opacity = '1';
      }, 10);
    }
  }, [location]);

  return <>{children}</>;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-neutral-50 flex flex-col">
        <Header />
        <PageTransition>
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
        </PageTransition>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
