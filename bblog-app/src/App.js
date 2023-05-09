import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  Article,
  ArticleListPage,
  AboutPage,
  NotFound,
  SavedArticles,
} from "./pages/index";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticleListPage />} />
        <Route path="/articles/:articleId" element={<Article />} />
        <Route path="/saved-articles" element={<SavedArticles />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
