import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { getResponseByCategory, getRecipeByName } from "../helpers";
import { initialCategorias } from "../data/categorias";


export const useRecipe = ( categoria, q = '' ) => {

      const navigate = useNavigate();

      const [ state, setState ] = useState({

        data: [],
        isLoading: true,
        error: null,

      })


      // Search
      const [ searchText, setSearchText ] = useState( q );
      const [ searchRecipe, setSearchRecipe] = useState( getRecipeByName( state.data, q ) );

      useEffect(() => {

        getResponseByCategory( categoria )

            .then( recipe => {
              setState({
                data: recipe,
                isLoading: false,
                error: null,
              })

              
            })

            .catch( err => {
              setState({
                data: [],
                isLoading: true,
                error: err,
              })
            })


      }, [ categoria ])
     

      const recipeToRender = ( searchRecipe.length >= 1 ) ? searchRecipe : state.data;
      const existsCategoryInURL = initialCategorias.some( cat => cat.nombre === categoria );
    

      const onInputChange = ({ target }) => {
  
          const { value } = target;
  
          setSearchText( value );
  
          const filteredRecipes = getRecipeByName( state.data, value );
  
          setSearchRecipe( filteredRecipes );
  
          value.trim() ? navigate(`?q=${value}`) : navigate(`/categorias/${categoria}`);
          
      };


      const onFoodByCategory = ( categoria, food ) => {
        navigate(`/categorias/${ categoria }/${ food }`)
      }

      const onNavigateBack = () => {
        navigate( -1 )
      }


    return{
        data: state.data,
        isLoading: state.isLoading,
        error: state.error,
        onFoodByCategory,
        onNavigateBack,
        searchText,
        recipeToRender,
        existsCategoryInURL,
        onInputChange,
    }
}

