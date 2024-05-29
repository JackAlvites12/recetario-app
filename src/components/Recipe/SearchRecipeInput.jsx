
export const SearchRecipeInput = ({ searchText, onInputChange }) => {

  return (

    <div className='recipe__form'>
        <input type="text" placeholder='Buscar receta' name='searchText' value={ searchText } onChange={ onInputChange } />
    </div>

  )
}
