import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Menu from './Menu/Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';
import ClientData from './components/ClientData/ClientData';
import RegisterClient from './components/RegisterClient/RegisterClient';
function App() {
  return (
      <div className="wrapper">
        <Header />
        <Menu />
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clientData" element={<ClientData />} />
        <Route path="/registerClient" element={<RegisterClient />} />

        </Routes>
        <Footer />
      </div>
  );
}

// const Widgets = () => {
//   return <h1>Widgets</h1>;
// };

// import './App.css';
// import Header from './Header';
// import Menu from './Menu/Menu';
// import Dashboard from './Dashboard';
// import Footer from './Footer';

// function App() {
//   return (
//     <div className="wrapper">
//       <Header/>
//       <Menu/>
//       <Dashboard/> .
//       <Footer/>
//     </div>
//   );
// }

export default App;
