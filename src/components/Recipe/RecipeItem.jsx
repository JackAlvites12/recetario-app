
export const RecipeItem = ({ nombre, porcion, descripcion, imagenId, categoria, onFoodByCategory }) => {

  return (

    <li className='recipe__item'>

        <figure className='recipe__figure'>
            <img src={`https://firebasestorage.googleapis.com/v0/b/react-firebase-alurageek.appspot.com/o/recetas%2F${ imagenId }`} alt={`${ nombre }`} />
        </figure>

        <section className="recipe__content">
            <div className='content'>
                <h3 className='content__title'>{ nombre }</h3>
                <p className='content__description'>
                    { descripcion }
                </p>
                
                <div className="content__footer">
                    <span className='content__porciones'>{ porcion }</span>
                    <box-icon name='right-arrow-circle' color='#5200FF' size="42px" onClick={ () => onFoodByCategory( categoria, nombre ) }></box-icon>
                </div>
            </div>
        </section>
    </li>   

  )

}
