import { Navigate, useParams } from 'react-router-dom';
import { useRecipe } from '../hooks/useRecipe';
import { getRecipeByCategoryAndFood } from '../helpers';


export const DetailsFoodPage = () => {

  const { nombre: categoria, food } = useParams();
 
  const { data, onNavigateBack } = useRecipe( categoria )

  const recipe = getRecipeByCategoryAndFood( categoria, food )
                
  if (data.length === 0) return

  const existsRecipeInURL = data.some( recipe => recipe.nombre === food )


  if(!existsRecipeInURL){
    return <Navigate to={`/categorias/${ categoria }`} />
  }
  


  return (
    <>
      <section className='animate__animated animate__fadeInLeft details'>
        <button className='btn-back' onClick={ onNavigateBack }><box-icon clci name='left-arrow-circle' color="#5200FF" size="lg"></box-icon></button>
        
        <div className="content__food">

          <h2 className='details__food__title'>{ food }</h2>

          <figure className='details__figure' 
            style={{ backgroundImage:`url()` }}>
              <img src={ `https://recetariomovil.000webhostapp.com/imgrecetas/${ recipe?.imagenId }` } alt={ `${ recipe?.nombre }` } />
          </figure>
          
          <p className='details__description'>{ recipe?.descripcion }</p>
          
          <div className='details__ingredientes'>
            <h4 className='ingredientes__title'>Ingredientes</h4>
            <p className='ingredientes__description'>{ recipe?.ingredientes }</p>
          </div>

          <div className="details__preparacion">
            <h4 className='preparacion__title'>Preparación</h4>
            <p className='preparacion__description'>{ recipe?.preparacion }</p>
          </div>

        </div>
      </section>
    </>
  )
}
