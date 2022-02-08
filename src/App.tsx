// #region 'Importing'
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import './App.css'
import HomePage from './Pages/Home/HomePage'
import ContactPage from './Pages/Contact/ContactPage'
import BlogPage from './Pages/Blog/BlogPage'
import ProductsPage from "./Pages/Products/ProductsPage"
import BlogItemPage from './Pages/BlogItem/BlogItemPage'
import Error404Page from './Pages/Error404/Error404Page'
import AboutUsPage from "./Pages/AboutUs/AboutUsPage"
import ServicesPage from './Pages/Servicess/ServicesPage'
import ServiceItemPage from "./Pages/ServiceItem/ServiceItemPage"
import TeamsPage from "./Pages/Teams/TeamsPage"
import TeamItemPage from "./Pages/TeamItem/TeamItemPage"
import ProductItemPage from './Pages/ProductItem/ProductItemPage'
import SignInPage from './Pages/SignIn/SignInPage'
import SignUpPage from './Pages/SignUp/SignUpPage'
import BagPage from './Pages/Bag/BagPage'
import FavoritesPage from './Pages/Favorites/FavoritesPage'
import PaymentPage from "./Pages/Payment/PaymentPage"
import {useEffect} from 'react/cjs/react.development'
import HeaderCommon from './Components/Common/HeaderCommon/HeaderCommon'
// #endregion

// #region 'App'
function App() {

  // #region 'Return Html'
  return (

    <>

      { 
        //#region 'Routes' 
      }

      <Routes>

        <Route 
          index 
          element={<Navigate replace to="/home" />} 
        />

        <Route 
          path = "/home" 
          element = {<HomePage />}>
        </Route>

        <Route 
          path = "/bag" 
          element = {<BagPage />}>
        </Route>

        <Route 
          path = "/favorites" 
          element = {<FavoritesPage />}>
        </Route>

        <Route 
          path = "/contact" 
          element = {<ContactPage />}>
        </Route>


        <Route 
          path = "/blog" 
          element = {<BlogPage />}>
        </Route>

        <Route 
          path = "/blog/:id" 
          element = {<BlogItemPage />}>
        </Route>


        <Route 
          path = "/about-us" 
          element = {<AboutUsPage />}>
        </Route>


        <Route 
          path = "/products" 
          element = {<ProductsPage />}>
        </Route>

        <Route 
          path = "/products/:id" 
          element = {<ProductItemPage />}>
        </Route>


        <Route 
          path = "/services" 
          element = {<ServicesPage />}>
        </Route>

        <Route 
          path = "/services/:id" 
          element = {<ServiceItemPage />}>
        </Route>


        <Route 
          path = "/sign-in" 
          element = {<SignInPage />}>
        </Route>

        <Route 
          path = "/sign-up" 
          element = {<SignUpPage />}>
        </Route>

        <Route 
          path = "/payment" 
          element = {<PaymentPage />}>
        </Route>


        <Route 
          path = "/teams" 
          element = {<TeamsPage />}>
        </Route>

        <Route 
          path = "/teams/:id" 
          element = {<TeamItemPage />}>
        </Route>


        <Route 
          path = "*" 
          element = {<Error404Page />}>
        </Route>
        
      </Routes>
      
      { 
        // #endregion 
      }

    </>

  )
  //#endregion

}
// #endregion

export default App