import style from './App.module.css'
import Display from "./component/display.jsx"
import ButtonContainer from "./component/buttonContainer.jsx"

 function App()
 {
  return<div className={style.calculator}>
    <Display></Display>
    <ButtonContainer></ButtonContainer>
   </div>
    
 }
 export default App;

 