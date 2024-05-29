
import { useLocation, useParams } from 'react-router-dom'
import { useRecipe } from '../hooks/useRecipe';
import { MessageLoading } from '../components';
import queryString from 'query-string'
import { RecipeComponent } from '../components/Recipe/RecipeComponent';



export const CategorieSelectedPage = () => {

    const { nombre: categoria } = useParams();

    const location = useLocation();

    const { q = '' } = queryString.parse( location.search )

    const { isLoading, error } = useRecipe( categoria )


  return (
    
    <>
        { 
            ( isLoading ) 
            ? <MessageLoading message={ error }/>
            : <RecipeComponent 
                categoria={ categoria } 
                query={ q }
              />

        }
    </>

  )
}
