import style from "./buttonContainer.module.css"

const ButtonContainer=()=>{
	const ButtonName=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
	return(
	<div className="button">
      <div className={style.buttonContainer}>

       {ButtonName.map((buttonName)=>(
       	<button key={buttonName} className={style.button}>{buttonName}</button>))}
	      {/*
	      <button className={style.button}>1</button>
	      <button className={style.button}>2</button>
	      <button className={style.button}>3</button>*/}
      </div>
	</div>
		);
}
export default ButtonContainer;