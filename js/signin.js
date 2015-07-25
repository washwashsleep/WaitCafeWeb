(function() {
	var f = App.Model({
		options: {
	    idAttr: 'id',
	    read: {
	      url: App.api + 'favorite'
	    }
	  }
	});
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
		fav: f(),
		userSignin: function(event) {
			event.preventDefault();
			this.user.sync(function(a,b,c){
				console.log(a,b,c);
			});
			this.fav.read();
		}
	});
}());