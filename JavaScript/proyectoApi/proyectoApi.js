const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1ac7eecb91mshea5302d9bb59239p16d827jsnab03720b37ec',
		'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
	}
};
let data = ""
fetch('https://aerodatabox.p.rapidapi.com/flights/number/IB3016?withAircraftImage=true&withLocation=true', options)
	.then(response => response.json())
	.then(data => {
		console.log(data[0].aircraft.model)
		document.getElementById("matricula").innerHTML = data[0].aircraft.model
		document.getElementById("imagen").setAttribute("src", data[0].aircraft.image.url)
		document.getElementById("altitud").innerHTML = data[0].greatCircleDistance.feet / 100
		document.getElementById("velocidad").innerHTML = data[0].greatCircleDistance.nm + "Nm/H"
		document.getElementById("latitud").innerHTML = data[0].departure.airport.location.lat
		document.getElementById("longitud").innerHTML = data[0].departure.airport.location.lon
	})
	