//.1.Importamos React
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//Poniendo el export fuera de la función
import Navbar from "./Navabar.jsx";

//si ponemos el export directamente en la función
//import { Footer } from "./Footer.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Alert } from "./Alert.jsx";
import { Spinner } from "./Spinner.jsx";
import { Card } from "./Card.jsx";
import { ExampleUseState } from "./ExampleUseState.jsx";
import { TrafficLight } from "./TrafficLight.jsx";
/* 
Antes se utilzaba clases pero era en los inicios de React pero cuando apareció Javascript
nos abrió la posibilidad a utilizar funcionesx
*/
//2. Create your first component - Nombre del componentes es de PascalCase, la primera palabra tiene que empezar por mayusculas
const Home = () => {
	//3. Código de JS


		//4.RETORNA UN ELEMENTO HTML
	/* sOLAMENTE PUEDE HABER UN ELEMENTO*/
	return (
		<div className="text-center" >
			
			{/* Añadir una página de React.JS */}
			<Navbar />
			<ExampleUseState/>
			<TrafficLight/>
			{/* <Alert/>
			<Spinner/>
			<Card title={"React"} description={"React es una libreria de Javascript orientada para el FrontEnd"}
			textButton={"Leer más"} imagen={rigoImage}/>
			<Card title={"React2"} description={"React es una libreria de Javascript orientada para el FrontEnd2"}
			textButton={"Leer más2"} imagen={rigoImage}/>
			<Card/>
			<h1 className="text-center mt-5" > Hello Rigo!</h1 >
			<Jumbotron />
			<p>
				<img src={rigoImage} />
			</p>
			<Footer/> */}
		</div >
	);
};

// 5.exporto la función para poder llamarlo en otro componente

export default Home;
