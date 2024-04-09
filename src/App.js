import ArticleDetail from "./pages/articleDetail/ArticleDetail";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from './pages/login/LoginPage';

import {Routes, Route} from 'react-router-dom';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div className="font-opensans">
      <Routes>
        <Route path='/' index element={ <HomePage />} />
        <Route path='/blog/:id' element={ <ArticleDetail />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
