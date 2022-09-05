import { useState } from "react";

export const App = () => {
  const [precioTotal, setprecioTotal] = useState(0);

  const [checkbox, setCheckbox] = useState({
    web: false,
    seo: false,
    ads: false,
  });

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

  console.log(checkbox);

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
          onChange={handleInputChange}
        />{" "}
        Una pàgina web (500 €)
        <br />
        <input
          type="checkbox"
          id="check02"
          name="seo"
          value="300"
          onChange={handleInputChange}
        />{" "}
        Una consultoria SEO (300 €)
        <br />
        <input
          type="checkbox"
          id="check03"
          name="ads"
          value="200"
          onChange={handleInputChange}
        />{" "}
        Una campanya de Google Ads (200 €)
        <br />
        <h4>Preu: {precioTotal} €</h4>
      </form>
    </>
  );
};