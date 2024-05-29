import { Link } from "react-router-dom"
import { CategoriesList } from "../components"

export const CategoriesPage = () => {

  return (

    <div className='animate__animated animate__fadeIn categorias'>

        <aside className='categorias__title'>
            
            <div className="categorias__btn-home">
              <Link to="/" className='btn-back'><box-icon clci name='left-arrow-circle' color="#5200FF" size="lg"></box-icon></Link>

            </div>
          
          <div className="categorias__span">
            <span className='red'>CAT</span>
            <span>EGOR</span>
            <span className='red'>ÍAS</span>
          </div>

        </aside>

        <section className='categorias__content'>
            <CategoriesList />
        </section>
        
    </div>
  )

}
