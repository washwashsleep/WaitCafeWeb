(function() {
	var Profile = App.Model({
		name: App.Property(),
		password: App.Property(),
		email: App.Property(),
		phone: App.Property(),
		gender: App.Property({
			defaultValue: 'BOY'
		}),
		options: {
			idAttr: 'id',
			create: {
				url: App.api + 'user'
			}
		}
	});


	App.View('Signup', {
		options: {
			route: 'signup',
			url: 'pages/signup.html'
		},
		profile: Profile(),
		createUser: function(event) {
			event.preventDefault();
			this.profile.sync();
		}
	});
}());