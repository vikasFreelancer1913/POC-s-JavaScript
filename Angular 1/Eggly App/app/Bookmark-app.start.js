angular.module('Bookmark', [

])
.controller('MainCtrl', function ($scope) {
	$scope.categories = [
		{'id': 0, 'name': 'Development'},
		{'id': 1, 'name': 'Design'},
		{'id': 2, 'name': 'Exercise'},
		{'id': 3, 'name': 'Humor'}
	];

	$scope.bookmarks = [
		{'id': 0, 'title': 'Angular js', 'url': 'http://angularjs.org', 'category': 'Development'},
		{'id': 1, 'title': 'Egghead.io', 'url': 'http://angularjs.org', 'category': 'Development'},
		{'id': 2, 'title': 'Backbone js', 'url': 'http://backbonejs.org/', 'category': 'Development'},
		{'id': 3, 'title': 'One Page Love', 'url': 'http://onepagelove.com', 'category': 'Design'},
		{'id': 4, 'title': 'The Best Designs', 'url': 'http://www.thebestdesigns.com', 'category': 'Design'},
		{'id': 5, 'title': 'A List Apart', 'url': 'http://alistapart.com', 'category': 'Design'},
		{'id': 6, 'title': 'Cracked Humor', 'url': 'http://www.cracked.com', 'category': 'Humor'},
		{'id': 7, 'title': 'College Humor', 'url': 'http://www.collegehumor.com', 'category': 'Humor'},
		{'id': 8, 'title': 'Mobility WOD', 'url': 'http://mobilitywod.com', 'category': 'Exercise'}
	];
});