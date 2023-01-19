
import './App.css';
import {  Routes, Route } from "react-router-dom";
//HOC
import HomeLayoutHOC from './HOC/Home.HOC';

//Component
import { Temp } from './Components/temp';
import Master from './Components/master';

function App() {
  return (
  <>
  <Routes>

    <HomeLayoutHOC path="/" exact component={Temp} />
    <HomeLayoutHOC path="/:type" exact component={Master} />
    </Routes>
  </>
  );
}



export default App;
