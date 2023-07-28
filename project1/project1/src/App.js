import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import RootLayout from './layouts/RootLayout';
import BlogPage from './pages/Blog';

const App = () => {

  
  return (

    <Routes>
      <Route element={ <RootLayout></RootLayout> } >
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/home" element={<HomePage />}> </Route>
        <Route path="/about" element={<AboutPage />}> </Route>
        <Route path="/contact" element={<ContactPage /> }> </Route>
        <Route path="/blog" element={<BlogPage />}></Route>
 
      </Route>
    </Routes>

    



  );

}
export default App;