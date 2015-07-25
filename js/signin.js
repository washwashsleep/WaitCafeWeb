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
		user: User(),
		userSignin: function(event) {
			event.preventDefault();
			this.user.sync();
		},
		options: {
			route: '/signin',
			url: 'pages/signin.html'
		}
	});
}());