
export const getRecipeByName = ( data = [], name = '' ) => {

    name = name.toLowerCase().trim();

    if( name.length === 0 ) return []

    return data.filter( recipe => recipe.nombre.toLowerCase().includes( name ))


}
