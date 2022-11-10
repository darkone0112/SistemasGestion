const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1ac7eecb91mshea5302d9bb59239p16d827jsnab03720b37ec',
		'X-RapidAPI-Host': 'call-of-duty-modern-warfare.p.rapidapi.com'
	}
};

fetch('https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/Amartin743/psn', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));