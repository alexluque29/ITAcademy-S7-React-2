
export const Pages = (props) => { 

  return (
    <>
        <br />
        <label className='pages'>Número de pàgines </label>
        < input
          type="number"
          name="pages"
          placeholder="1"
          min="1"
          max="20"                 
          onChange={ props.onChange }
          value= { props.pageValue }
          />
            
        <br />
        <label className='pages' >Número d'idiomes </label>
        <input
          type="number"
          name="languages"
          placeholder="1"
          min="1"
          max="5"
          onChange={ props.onChange }
          value= { props.langValue }
        />
    </>
  )
}
