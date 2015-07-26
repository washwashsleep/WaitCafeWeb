(function() {

	var Item = App.Model({
		selected: App.Property(),
		init: function() {
			var collection = this.collection();
			if (collection) {
				this.selected.on('change', collection.save);
			}
		},
		toggleSelection: function() {
			this.selected(!this.selected());
		}
	});

	var Recommendation = App.Collection(Item, {
		coordinates: App.Property({
			defaultValue: '25.041399,121.554233'
		}),
		radius: App.Property({
			defaultValue: 20
		}),
		limit: App.Property({
			defaultValue: 10
		}),
		keyword: App.Property({
			defaultValue: 'cafe'
		}),
		selected: App.Property({
			defaultValue: false
		}),
		options: {
			read: {
				// url: App.api + 'favorite/recommend'
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
		init: function() {
			this.isRecommendation = false;
			this.isFavorite = false;
		},
		recommendation: Recommendation(),
		favorite: Favorite(),
		routed: function(params) {

			this.list = this[params.type].read();
			this.setTypeFlag(params.type, true);
		},
		setTypeFlag: function(type, bool) {
			var capType = type.charAt(0).toUpperCase() + type.slice(1);
			return this['is' + capType] = bool;
		}
	});

}());