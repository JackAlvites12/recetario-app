import { RecipeItem } from "./RecipeItem"

export const ListRecipe = ({ recipeToRender = [], onFoodByCategory, categoria }) => {

  return (

        <ul className='list__recipe'>
            {
              recipeToRender.map(({ id, nombre, porcion, descripcion, imagenId }) => (
                    <RecipeItem 
                        key={ id } 
                        nombre={ nombre } 
                        porcion={ porcion } 
                        descripcion={ descripcion } 
                        imagenId={ imagenId } 
                        categoria={ categoria }
                        onFoodByCategory={ onFoodByCategory }
                    />
              ))

            }
        </ul>
  )

}
