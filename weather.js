

let submit = document.getElementById('btnSubmit');
let search = document.getElementById('search');
let cityName = document.getElementById('cityName');
let clouds = document.getElementById('clouds');
let temp = document.getElementById('temperatura');
let cities = document.getElementById('txtCity');

//let API key = "a8085e10a0b53cdcc2b792e98d5e8819";

	submit.addEventListener('click', function(){
		 
			fetch ('http://api.openweathermap.org/data/2.5/weather?q='+ cities.value + '&appid=a8085e10a0b53cdcc2b792e98d5e8819')
			.then(response => response.json())
			.then(data => {

				cityName.innerHTML= data['name'];
				//debugger;
				temp.innerHTML = data.main.temp;;
				clouds.innerHTML = data.clouds.all;
			})
		}); 
	//Refresh the page
	function refreshPage(){
		window.location.reload();
	}
	












