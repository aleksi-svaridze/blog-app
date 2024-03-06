import ArticleDetail from "./pages/articleDetail/ArticleDetail";
import HomePage from "./pages/home/HomePage";

import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="font-opensans">
      <Routes>
        <Route path='/' index element={ <HomePage />} />
        <Route path='/blog/:id' element={ <ArticleDetail />} />
      </Routes>
    </div>
  );
}

export default App;
