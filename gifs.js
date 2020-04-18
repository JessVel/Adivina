
let jugada = function () {

	let random = Math.floor(Math.random()*11); /* INCLUYE NUM DEL 0 AL 10 */
	console.log(random);
	let ingresado = document.getElementById('numero').value;
	
	

			if (ingresado == random){
				mostrarGif();
				document.getElementById('alert').innerHTML = `<div class="alert alert-success alert-dismissible fade show animated zoomIn" role="alert">
														<strong>Ganaste!</strong> Acá está tu gif!<i class="fa fa-grin-hearts"></i> 
														<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				 										<span aria-hidden="true">&times;</span>
														</button>
														</div>
														<div id="caja"></div>`;
				console.log("Has ganado!");	
													
				
				
				
					
							  
									} else if (ingresado != random)  {
				document.getElementById('alert').innerHTML = `<div class="alert alert-danger alert-dismissible fade show animated jello" role="alert">
														<strong>Perdiste!</strong> Volve a intentarlo
														<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				 										<span aria-hidden="true">&times;</span>
														</button>
														  </div>`;
				console.log("has perdido!");	
												  
				
				
																	}}
							
																	

		function mostrarGif(){

			let apiKey = 'eyRxfhyq7dyHJXfqhaaBX0xX8ehcicw8';

			let url = 'https://api.giphy.com/v1/gifs/search';

			let topic = document.getElementById('topic').value;

			url += `?api_key=${apiKey}&q=${topic}`;

				fetch( url ).then ( //funcion que se ejecuta cuando el fetch es exitoso, 

					(response) =>{
						return response.json(); //retorna una promesa del tipo json, es la promesa del fetch
					}
	
				).then( // de la promesa que retorno el response, hacer lo siguiente, es la promesa del json
					(data) =>{
						console.log( data.data[0].images.original.url );
						document.getElementById('caja').innerHTML += `<img src="${data.data[0].images.original.url}"></img>`;
					}
	
				).catch ( 
					function() {
						console.log ("error");
				}
				);

			}

		

		

// manera mas moderna de manejar promesas
// hay que tener en cuenta los navegadores
/*
async function getGifs(){
	let response = await fetch( url ); // la respuesta se guarda y con await espera a que el fetch se termine
		//aca queda el resultado			//esta parte es sincrona, el resultado lo guarda en response
		// de que el fetch salio bien			// await permite  guardar la respuesta y no la promesa
		let datos = await response.json();

		return datos; //esto retorna una promesa

	}	
	

getGifs().then( // como es una promesa, uso el metodo .then
				function ( data ){
					console.log(data);
				}
			);

function cargarListadoGifs ( gifs ){
	console.log (gifs);
}


			
//async /await*/


																	
