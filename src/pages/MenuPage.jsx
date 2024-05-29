import { Navbar } from "../components/ui/Navbar"

export const MenuPage = () => {
        
  return (

    <>
    
        <div id='banner' className="animate__animated animate__fadeIn banner">

            <Navbar />
            
            <h5 className='banner__text'>. Descubre la magia .</h5>
            
            <div className="banner__content">
                <div className='content__text'>
                    <span className='red'>Re</span><span className='light'>ce</span><span className='red'>tas</span>
                </div>
                <div className='content__text'>
                    <span className='red'>Per</span><span className='light'>ua</span><span className='red'>nas</span>
                </div>
                <figure className='content__figure'>
                    <img src="/src/assets/banner.png" alt="" />
                </figure>
            </div>

            <h5 className='banner__text'>. en cada bocado .</h5>

        </div>

        <div id="menu" className="animate__animated animate__fadeIn menu">

            <h2 className="menu__title">¡Prepárate para una experiencia culinaria única e inolvidable!</h2>
            <p className="menu__description">Embárcate en un viaje culinario a través del Perú, donde cada plato cuenta una historia y cada ingrediente tiene su propia esencia. Descubre las recetas que han sido transmitidas de generación en generación y que hoy deleitan paladares en todo el mundo.</p>
        
             <hr className="separator"/>

            <blockquote className="quote">
                <box-icon type='solid' name='quote-alt-left' color="yellow" size="70px" position="start"></box-icon>
                <p className="quote__description">Si encontraron en la cocina un pollo a la brasa de ayer, no lo mires con desdén, muchas cosas puedes hacer</p>
            </blockquote>

            <h5 className="quote__actor">- Gastón Acurio -</h5>
        </div>

    </>


  )
}
