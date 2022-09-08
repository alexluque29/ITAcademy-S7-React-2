
import { useState, useEffect } from "react";
import { Pages } from "./components/Pages";
import { Panell } from "./styled";

export const App = () => {
  const [precioTotal, setprecioTotal] = useState(0);

  useEffect(()=> {
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

  useEffect (()=> {
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

  const [variables, setVariables] = useState ({
    pages: 1,
    languages: 1
  })

  const {pages, languages} = variables
  
  const handleVariablesChange = ({ target }) => {
    const { name, value } = target;
    setVariables ({
      ...variables, 
      [name]: value,
    });
  } 

  //******************* Funciones de los botones *******************

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

  let pageVar = (pages > 1) ? (pages * 30) : 0;
  let langVar = (languages > 1) ? (languages * 30) : 0;
  let totalVariables = (pageVar + langVar);
  
  return (
    <>
      <form>
        <div>Què vols fer?</div>
        <br />
        <input
          type="checkbox"
          id="check01"
          name="web"
          value="500"
          onChange={ handleInputChange }
          />
        Una pàgina web (500 €)
          <Panell isShowed={ checkWebStatus }>
          <Pages
           pageValue = { pages }
           langValue = { languages }
           onChange = { handleVariablesChange }
           addPage = { handleAddPage }
           subPage = { handleSubstractPage }
           addLang = { handleAddLang }
           subLang = { handleSubstractLang }
          />
          </Panell>
        <br />
        <input
          type="checkbox"
          id="check02"
          name="seo"
          value="300"
          onChange={ handleInputChange }
        />
        Una consultoria SEO (300 €)
        <br />
        <input
          type="checkbox"
          id="check03"
          name="ads"
          value="200"
          onChange={ handleInputChange }
        />
        Una campanya de Google Ads (200 €)
        <br />
        <h4>Preu: { precioTotal + totalVariables } €</h4>
      </form>
    </>
  );
};