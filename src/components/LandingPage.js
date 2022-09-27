
import '../styles/landingPage.css';
import { useNavigate } from 'react-router-dom';
import presupuesto from'../img/presupuesto.jpg';

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <h1>Pressupost Web</h1>
        <h3>React - Sprint 7</h3>
      </div>
      <hr />
      <div className="section">
        <img src={presupuesto} alt="pres" />
        <div className="aside">
          <h4 className="parrafo">
            Aplicació per calcular el pressupost d'una pàgina web, afegint més
            interaccions amb l'usuari. La nostra web reacciona i modifica el
            preu total en funció de les opcions que tria l'usuari.
          </h4>
          <button className="enterButton" onClick={() => navigate("app")}>
            Entrar
          </button>
        </div>
      </div>
    </>
  );
};