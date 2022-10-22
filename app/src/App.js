import 'bulma/css/bulma.min.css';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { AnalysisPage } from './pages/AnalysisPage';
import { ThankYouPage } from './pages/ThankYouPage';
import Navbar from './components/Navbar';
import { DashboardPage } from './pages/DashboardPage';

const App = () => {
  return (
    <div>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route  path = '/thank-you' element = {<ThankYouPage/>}/>
        <Route  path = "/" element = {<HomePage/>}/>
        <Route path = "/dashboard" element = {<DashboardPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App;


