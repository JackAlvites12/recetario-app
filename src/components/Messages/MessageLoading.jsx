
export const MessageLoading = ({ message }) => {

  return (
    <section className='view-error'>
        <h2 className='loading-message'>Cargando...</h2>
        <h4>{ message }</h4>
    </section>
  )

}
