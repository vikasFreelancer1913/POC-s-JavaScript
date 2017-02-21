var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');

ourRequest.onload = function(response) {
	if(ourRequest.status >= 200 && ourRequest.status < 400) {
		var ourData = JSON.parse(ourRequest.responseText);
		createHTML(ourData);
	}else {
		alert('Network is connected but there is something wrong with the response.');
		console.log(response);
	}
};

ourRequest.onerror = function() {
	alert('There might be some connection error. Please check your net connection and try again.');
}

ourRequest.send();

Handlebars.registerHelper('calculateAge', function(birthYear) {
	var age = new Date().getFullYear() - birthYear;
	if (age > 0) {
		return age + ' years old';
	}else {
		return 'Less than a year old';
	}
});

function createHTML(petsData) {
	var rawTemplate = document.getElementById('petsTemplate').innerHTML;
	var compiledTemplate = Handlebars.compile(rawTemplate);
	var ourGeneratedHTML = compiledTemplate(petsData);

	var petsWrap = document.getElementById('animalInfo');
	petsWrap.innerHTML = ourGeneratedHTML; 

}