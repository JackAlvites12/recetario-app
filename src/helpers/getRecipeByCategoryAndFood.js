
import { useRecipe } from "../hooks/useRecipe";

export const getRecipeByCategoryAndFood = ( categoria, name = '' ) => {

  const { data } = useRecipe( categoria )

  return data.find( recipe => recipe.nombre === name )

    
}
