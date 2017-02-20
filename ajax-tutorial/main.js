var pageCounter = 1;

var btnLoad = document.getElementById('btn');
var animalWrap = document.getElementById('animalInfo');

btnLoad.addEventListener('click', function() {
	if(pageCounter < 4) {
		var ourRequest = new XMLHttpRequest();
		ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');

		ourRequest.onload = function(response) {
			if(ourRequest.status >= 200 && ourRequest.status < 400) {
				var ourData = JSON.parse(ourRequest.responseText);
				renderHTML(ourData);
			}else {
				alert('Network is connected but there is something wrong with the response.');
				console.log(response);
			}
		};

		ourRequest.onerror = function() {
			alert('There might be some connection error. Please check your net connection and try again.');
		}

		ourRequest.send();
		pageCounter++;
	}else {
		var continueMsg = confirm('You have consumed your click chances. If you want to continue press OK else press CANCLE');
		
		if(continueMsg) {
			pageCounter = 1;		
		}
	}

});


function renderHTML(data) {
	var htmlString = "";

	data.forEach(function(item) {
		htmlString += "<p>" + item.name + " is a " + item.species +". That likes to eat "+ item.foods.likes.join(', ') +'.</p>';
	});

	animalWrap.insertAdjacentHTML('beforeend', htmlString);
}