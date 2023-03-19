import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import UserPage from './Pages/UserPage';
import Alert from './component/Assets/Alert';
import { GithubProvider } from './Context/Github/githubContext';
// import { AlertProvider} from './Context/Github/githubContext';
import {AlertProvider} from './Context/Alert/AlertContext';
function App() {
  return (
    <GithubProvider>
    <AlertProvider>
    <Router>
    <div className="flex flex-col justify-between h-screen">
     <Navbar/>
     <Alert/>
     <main className='container mx-auto px-3 pb-12'>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/user/:login" element={<UserPage/>}/>
      <Route path="/not-found" element={<NotFound/>}/>
      <Route path="/*" element={<NotFound/>}/>
      </Routes>
     </main>
     <Footer/> 
    </div>
   </Router>
   </AlertProvider>
    </GithubProvider>
    
  );
}
export default App;