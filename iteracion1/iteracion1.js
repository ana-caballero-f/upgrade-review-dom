// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
//=================================================================================

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const paisesUl = document.createElement('ul');
for(let i=0;i<countries.length; i++){
	const pais = document.createElement('li');
	pais.innerText= countries[i];
	paisesUl.append(pais);
}
document.body.append(paisesUl);


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
//============================================================================

const elemEliminar = document.querySelector('.fn-remove-me');
elemEliminar.remove();


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
//==============================================================================

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];


//CÓMO SE SELECCIONA DATA-FUNCTION?
//CÓMO METER UL EN LA CONSTANTE SELECCIONADA??

const data= document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');
for(let j=0; j<cars.length; j++){
	const car = document.createElement('li');
	car.innerText = cars[j];
	ulCars.append(car);
}
data.append(ulCars);




// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
//===================================================================================

const countries1 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];


const crearLista = document.createElement('ul');

for(let countrie of countries1){
	const crearLis = document.createElement('li');
	crearLis.innerHTML = `<div><h4>${countrie.title}></h4><img src=${countrie.imgUrl}></div>`;
	crearLista.append(crearLis);
}

document.body.append(crearLista)



// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.
//=============================================================================================

const btn = document.createElement('button');
document.body.append(btn);
btn.addEventListener('click', fncBorrarElem);
btn.textContent = "BORRAR";


function fncBorrarElem(){
	const elemParaBorrar = document.querySelectorAll('li');//--> poner aquí la variable que almacena el "li"
															//para que se actualice cada vez la longitud de la lista
	elemParaBorrar[elemParaBorrar.length-1].remove();
	};



// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.
//===========================================================================================

const elementosConBtn= document.querySelectorAll('li');

for(let elemento of elementosConBtn){
	const botones = document.createElement('button');
	botones.innerText="Borrar";
	elemento.append(botones);
	
	function borrarElemento() {
		elemento.remove();
	 }
	botones.addEventListener("click", borrarElemento);
};
