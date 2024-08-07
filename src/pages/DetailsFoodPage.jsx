import { Navigate, useParams } from 'react-router-dom';
import { useRecipe } from '../hooks/useRecipe';


export const DetailsFoodPage = () => {

  const { nombre: categoria, food } = useParams();

 
  const { data, onNavigateBack } = useRecipe( categoria )


  // El problema está aqui. 
  const recipe = data.find( recipe => recipe.nombre === food )

  if (data.length === 0) return


  const existsRecipeInURL = data.some( recipe => recipe.nombre === food )


  // Podemos borrar esto hasta poder corroborar que es lo que está pasando porque 
  // nos está regresando undefined, ACTUALIZACIÓN: NOS ESTA RETORNANDO UNDEFINED PORQUE 
  // ESTTÁ BUSCANDO UN NOMBRE QUE NO EXISTE EN LA DATA PORQUE NOS ESTA REGRESANDO LOS MISMOS 
  // 9 PRIMEROS OBJETOS.... POR LO TANTO NO LO ENCUENTRA Y NOS DA UNDEFINED. 
  // automaticamente al ahcer click y que renderice este componente nos devuelve 
  // los mismos 9 primeros objetos de la data. 
  
  if(!existsRecipeInURL){
    return <Navigate to={`/categorias/${ categoria }`} />
  }
  
//parece como si al momento de renderizar el detailsFoodPage vuelvo a llamar nuevamente a mi useRecipe y la data sigue siendo la misma la
// pagina tambien, es decir, se vuelve a ejecutar mi useEffect, con los mismos valores.... que puedo hacer en ese caso? si me acabas de entender 
//no? dame codigo 

  return (
    <>
      <section className='animate__animated animate__fadeInLeft details'>
        <button className='btn-back' onClick={ onNavigateBack }><box-icon clci name='left-arrow-circle' color="#5200FF" size="lg"></box-icon></button>
        
        <div className="content__food">

          <h2 className='details__food__title'>{ food }</h2>

          <figure className='details__figure' 
            style={{ backgroundImage:`url()` }}>
              <img src={ `https://firebasestorage.googleapis.com/v0/b/react-firebase-alurageek.appspot.com/o/recetas%2F${ recipe?.imagenId }` } alt={ `${ recipe?.nombre }` } />
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
