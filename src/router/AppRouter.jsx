import { Navigate, Route, Routes } from "react-router-dom"
import { RecetarioApp } from "../RecetarioApp"
import { CategorieSelectedPage, CategoriesPage, DetailsFoodPage } from "../pages"

export const AppRouter = () => {

  return (
    
    <Routes>

      <Route path="/" element={ <RecetarioApp /> }/>
      <Route path="/categorias" element={ <CategoriesPage /> }/>
      <Route path="/categorias/:nombre" element={ <CategorieSelectedPage /> }/>
      <Route path="/categorias/:nombre/:food" element={ <DetailsFoodPage /> }/>

      {/* Default */}
      <Route path="/*" element={ <Navigate to="/" /> }/>

    </Routes>
  
  )
}

