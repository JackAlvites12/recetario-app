
export const CategorieItem = ({ nombre, img, onNavigateToCategoryDinamic}) => {

  return (

    <li key={ nombre } onClick={ () => onNavigateToCategoryDinamic( nombre ) }
        className='list__item' 
        style={{ backgroundImage: `url(/src/assets/${ img } )`,
             backgroundRepeat: 'no-repeat',
             }}><span className='item__title'>{ nombre }</span>
    </li>

  )
}
