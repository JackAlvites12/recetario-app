import React, { useState } from 'react'
import { initialCategorias } from '../../data/categorias'
import { useNavigate } from 'react-router-dom'
import { CategorieItem } from './CategorieItem'

export const CategoriesList = () => {

    const [ categorias, setCategorias ] = useState( initialCategorias )
    
    const navigate = useNavigate()

    const onNavigateToCategoryDinamic = ( nombre ) => {

      navigate(`/categorias/${ nombre }`)
    }

  return (

    <ul className='categorias__list'>
        {
            categorias.map(({ nombre, img }) => (
                <CategorieItem key={ nombre } nombre={ nombre } img={ img } onNavigateToCategoryDinamic={ onNavigateToCategoryDinamic }/>
            ))
        }
    </ul>
    
  )

}
