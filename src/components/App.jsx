import { useState, useEffect } from "react";
import { Pages } from "./Pages";
import { Panell } from "../styled";
import "../styles/app.css";

export const App = () => {
  const [precioTotal, setprecioTotal] = useState(0);

  useEffect(() => {
    const checkbox = JSON.parse(localStorage.getItem("checkbox"));
    if (checkbox) {
      setCheckbox(checkbox);
    }
  }, []);

  const [checkbox, setCheckbox] = useState({
    web: false,
    seo: false,
    ads: false,
  });

  useEffect(() => {
    localStorage.setItem("checkbox", JSON.stringify(checkbox));
  }, [checkbox]);

  const handleInputChange = ({ target }) => {
    const { checked, value, name } = target;

    if (checked) {
      setprecioTotal(precioTotal + parseInt(value));
      setCheckbox({
        ...checkbox,
        [name]: checked,
      });
    } else {
      setprecioTotal(precioTotal - parseInt(value));
      setCheckbox({
        ...checkbox,
        [name]: checked,
      });
    }
  };

  let checkWebStatus = checkbox.web;

  const [variables, setVariables] = useState({
    pages: 1,
    languages: 1,
  });

  const { pages, languages } = variables;

  const handleVariablesChange = ({ target }) => {
    const { name, value } = target;
    setVariables({
      ...variables,
      [name]: value,
    });
  };

  //******************* VARIABLES BUTTONS *******************

  const handleAddPage = (e) => {
    setVariables({
      ...variables,
      pages: pages + 1,
    });
    e.preventDefault();
  };

  const handleSubstractPage = (e) => {
    if (pages > 1) {
      setVariables({
        ...variables,
        pages: pages - 1,
      });
    }
    e.preventDefault();
  };

  const handleAddLang = (e) => {
    setVariables({
      ...variables,
      languages: languages + 1,
    });
    e.preventDefault();
  };

  const handleSubstractLang = (e) => {
    if (languages > 1) {
      setVariables({
        ...variables,
        languages: languages - 1,
      });
    }
    e.preventDefault();
  };

  let pageVar = pages > 1 ? pages * 30 : 0;
  let langVar = languages > 1 ? languages * 30 : 0;
  let totalVariables = pageVar + langVar;
  let preu = precioTotal + totalVariables;

  // ************************BUDGETS***********************************

  // STATES
  let initialPressupostos = [];

  const [budget, setBudget] = useState({
    client: "",
    nom: "",
    preu: 0,
    data: "",
  });

  const [pressupostos, setPressupostos] = useState(initialPressupostos);
  
  // INPUT CHANGE
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setBudget({
      ...budget,
      [name]: value,
      preu: preu,
      data: current,
    });
  };
  
  // PRESS BUTTON SAVE
  const onSubmit = (event) => {
    event.preventDefault();
    let newPressupostos = [...pressupostos];
    newPressupostos.push(budget);
    setPressupostos(newPressupostos);
    document.getElementById("input-form").reset();
    document.getElementById("input-opt").reset();    
  };
  
  //******************New Date() Function*******************  
  
  const current = new Date();  

  //******************Sort Functions*******************
  
  function sortByAlf() {
    let ordena = pressupostos.slice().sort((a, b) => {
      if (a.client.toLowerCase() < b.client.toLowerCase()) {return -1;}
      if (a.client.toLowerCase() > b.client.toLowerCase()) {return 1;}
      return 0;     
    });
    setPressupostos([...ordena]);
  };  
  
  function sortByDate() {
    let ordena = pressupostos.slice().sort((a, b) => {
      return b.data - a.data 
    });
    setPressupostos([...ordena]);
  };

  return (
    <>
      <div className="cont">
        <div className="cont-izq">
          <form id="input-opt">
            <h2>Què vols fer?</h2>
            <input
              type="checkbox"
              id="check01"
              name="web"
              value="500"
              onChange={handleInputChange}
            />
            Una pàgina web (500 €)
            <Panell isShowed={checkWebStatus}>
              <Pages
                pageValue={pages}
                langValue={languages}
                onChange={handleVariablesChange}
                addPage={handleAddPage}
                subPage={handleSubstractPage}
                addLang={handleAddLang}
                subLang={handleSubstractLang}
              />
            </Panell>
            <br />
            <input
              type="checkbox"
              id="check02"
              name="seo"
              value="300"
              onChange={handleInputChange}
            />
            Una consultoria SEO (300 €)
            <br />
            <input
              type="checkbox"
              id="check03"
              name="ads"
              value="200"
              onChange={handleInputChange}
            />
            Una campanya de Google Ads (200 €)
            <hr />
            <br />
          </form>

          {/* ************** CUSTOMER INPUTS *****************  */}

          <form id="input-form">
          <label>Nom del client: </label>
            <input
              type="text"
              placeholder="Client"
              name="client"
              onChange={onInputChange}
            />
            <br />
            <label>Nom del pressupost: </label>
            <input
              type="text"
              placeholder="Pressupost"
              name="nom"
              onChange={onInputChange}
            />
            
            <br />
            <br />
            <h4 id="preuTotal">Preu: {preu} €</h4>
            <br />
            <button className="bot-envia"  type="submit" onClick={onSubmit}>
              Afegir pressupost
            </button>
          </form>
        </div>
        <div className="cont-der">
          <h3>
            <u>Llistat de pressupostos</u>
          </h3>
          <br />
          <div className="bot-ordenar">
              <button className="bot-ord" type="button" onClick={ sortByAlf }>Ordenar A-Z</button>
              <button className="bot-ord" type="button" onClick={ sortByDate }>Ordenar Dates</button>
              
              {/* La función que resetea el listado es la misma que ordena por fechas debido a que ése es el orden
              en el que se van introduciendo los nuevos presupuestos en el array. */}
              <button className="bot-ord" type="button" onClick={ sortByDate }>Reset</button>
          </div>
          <br />
          <ul>
            {pressupostos.length === 0 ? (
              <div className="senPre">- Sense pressupostos -</div>
            ) : (
              <div>
                {pressupostos.map((item, i) => (
                  <li className="llistat" key={i}>
                    {`Client. ${item.client}  Press: ${item.nom}  Total: ${item.preu} €.  a data: ${item.data.getFullYear()}/${item.data.getMonth()+1}/${item.data.getDate()} 
                    ${item.data.getHours()}:${item.data.getMinutes()}:${item.data.getSeconds()} h.`}
                    <hr />
                  </li>
                ))}
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
