(function() {
	var Recommendation = App.Collection({
		coordinates: App.Property({
			defaultValue: '25.041399,121.554233'
		}),
		radius: App.Property({
			defaultValue: 20
		}),
		limit: App.Property({
			defaultValue: 5
		}),
		keyword: App.Property({
			defaultValue: 'cafe'
		}),
		options: {
			read: {
				url: App.api + 'favorite/recommend'
			}
		}
	});

	var Favorite = App.Collection({
		userId: App.Property({
			defaultValue: App._userId
		}),
		options: {
			read: {
				url: App.api + 'favorite'
			}
		}
	});

	App.View('List', {
		options: {
			route: 'list/{{type}}',
			url: 'pages/list.html'
		},
		recommendation: Recommendation(),
		favorite: Favorite(),
		routed: function(params) {
			this.list = this[params.type].read();
		}
	});
}());