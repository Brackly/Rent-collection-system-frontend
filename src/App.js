import './App.css';
import Header from './Components/header/Header'
import Sidebar from'./Components/sidebar/Sidebar'
import Main from'./Components/main/Main'
import Right from './Components/main/Right'
import Footer from './Components/footer/Footer'


function App() {
  return (
    <div className="App">
      <div className="item1"><Header/></div>
      <div className="item2"><Sidebar/></div>
      <div className="item3"><Main/></div> 
      <div className="item4"><Right/></div>
      <div className="item5"><Footer/></div>
    </div>
  );
}

export default App;
