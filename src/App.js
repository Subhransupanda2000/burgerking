import './App.css';
import Navbar from './component/Navbar';
import Order from './component/Order';
import Arrayjson from './Arrayjson';
import Card from './component/Card';
import Footer from './component/Footer';
import Footernav1 from './component/Footernav1';
import Footernav2 from './component/Footernav2';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Order/>
      <div id='demo'>
      { Arrayjson.map((x)=>{
      return(
      <Card src={x.src}heading={x.heading}para={x.para}/>
     )})}
      </div>
     <Footer/>
     <Footernav1/>
     <Footernav2/>
    </div>
  );
}

export default App;
