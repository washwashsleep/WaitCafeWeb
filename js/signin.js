(function() {
	var User = App.Model({
		email: App.Property(),
		password: App.Property(),
	  options: {
	    idAttr: 'id',
	    create: {
	      url: App.api + 'user/login'
	    }
	  }
	});

	App.View('Signin', {
		options: {
			route: 'signin',
			url: 'pages/signin.html'
		},
		user: User(),
		userSignin: function(event) {
			event.preventDefault();

			var view = this;

			this.user.sync(function(data, status) {
				if(data._id) {
					App._userId = data._id;
					view.route('list/recommendation');
				}
			});
		}
	});
}());