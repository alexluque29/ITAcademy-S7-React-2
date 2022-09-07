
export const Pages = (props) => {   

  return (
    <>
        <br />
        <label>Número de pàgines </label>
        <button className="button-sub" onClick={ props.subPage }>-</button>
        < input          
          type="text"
          size="1"
          name="pages"
          placeholder="1"                          
          onChange={ props.onChange }
          value= { props.pageValue }
          />
          <button className="button-sub"onClick={ props.addPage }>+</button>
            
        <br />
        <label>Número d'idiomes </label>
        <button className="button-sub" onClick={ props.subLang }>-</button>
        <input
          type="text"
          size="1"
          name="languages"
          placeholder="1"          
          onChange={ props.onChange }
          value= { props.langValue }
        />
          <button className="button-sub" onClick={ props.addLang }>+</button>
    </>
  )
}