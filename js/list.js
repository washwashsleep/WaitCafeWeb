(function() {
	var c = App.Collection({});

	App.View('List', {
		options: {
			route: 'list/{{type}}',
			url: 'pages/list.html'
		},
		routed: function(params) {
			this.currentType = params.type;
		}
	});
}());