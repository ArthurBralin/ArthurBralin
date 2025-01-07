import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PersonalNews from './PersonalNews';
import Footer from './Footer';
import Header from './Header';
import ConditionalHeader from './ConditionalHeader';
import NewsList from './NewsList';

const routeConfig = [
  { path: "/", element: <NewsList /> },
  { path: "/personal-news/:id", element: <PersonalNews /> },
];

function App() {
  return (
    <Router>
      <Header />
      <ConditionalHeader />
      <Routes>
        {routeConfig.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;