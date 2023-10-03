
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Pages/Layout';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import LoginReg from './Components/Pages/auth/LoginReg';
import ResetPassword from './Components/Pages/auth/ResetPassword';
import PasswordResetForm from './Components/Pages/auth/PasswordResetForm';
import Profile from './Components/Pages/Profile';
function App() {
  return (
   <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='login' element={<LoginReg/>}/>
            <Route path='resetpassword' element={<ResetPassword/>}/>
            <Route path='reset' element={<PasswordResetForm/>}/>
        </Route>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='*' element={ <h1>Error 404 Page not found !!</h1> }/>
      </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
