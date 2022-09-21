import { useState } from 'react';
import iconoInfo from '../img/iconoInfo.jpg';
import { PopupPage } from '../components/PopupPage';


let texto = '';

export const Pages = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onCloseModal = () => {
    setIsOpen(false);
  };

  function openPopupPage() {
    setIsOpen(true);
    texto = "Indica el número de pàgines que tindrà el teu lloc web.";
  }

  function openPopupLang() {
    setIsOpen(true);
    texto = "Indica el número d'idiomes que tindrà el teu lloc web.";
  }

  return (
    <>
      <br />
          <label>Número de pàgines </label>
          <button className="button-sub" onClick={ props.subPage }> - </button>
          <input
            type="text"
            size="1"
            name="pages"
            placeholder="1"
            onChange={ props.onChange }
            value={ props.pageValue }
          />
          <button className="button-sub" onClick={ props.addPage }> + </button>
          <img
            className="button-info"
            src={ iconoInfo }
            alt="info"
            onClick={ openPopupPage }
          />
      <br />
        <label>Número d'idiomes </label>
        <button className="button-sub" onClick={ props.subLang }> - </button>
        <input
          type="text"
          size="1"
          name="languages"
          placeholder="1"
          onChange={ props.onChange }
          value={ props.langValue }
        />
        <button className="button-sub" onClick={ props.addLang }> + </button>
        <img
          className="button-info"
          src={ iconoInfo}
          alt="info"
          onClick= { openPopupLang }
        />
      <PopupPage estado={ isOpen } close={ onCloseModal } texto={ texto } />
    </>
  );
};