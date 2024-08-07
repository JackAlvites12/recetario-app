import { SearchRecipeInput } from './SearchRecipeInput'
import { ListRecipe } from './ListRecipe'
import { Link, Navigate } from 'react-router-dom'
import { useRecipe } from '../../hooks/useRecipe'

export const RecipeComponent = ({ categoria, query  }) => {

  const { onFoodByCategory, searchText, recipeToRender, onInputChange, existsCategoryInURL, onNextPage } = useRecipe( categoria, query )

  if( !existsCategoryInURL ) return <Navigate to={`/categorias`} /> 

  return (
        <section className='animate__animated animate__fadeIn recipe'>

            <Link to="/categorias" className='btn-back'><box-icon name='left-arrow-circle' color="#5200FF" size="lg"></box-icon></Link>


            <h2 className='recipe__title'>{ categoria }</h2>

            <SearchRecipeInput searchText={ searchText } onInputChange={ onInputChange }/>

            <ListRecipe 
                recipeToRender={ recipeToRender } 
                categoria={ categoria }
                onFoodByCategory={ onFoodByCategory }
            />
                
        </section>
  )

}
