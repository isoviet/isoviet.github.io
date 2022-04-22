/**
 * Analytics frontend
 * @version 1.0.0
 */
window.A = {
	'_account': 0,
	'_url': (document.location.protocol == "https:" ? "https:" : "http:") + "//an.itsrealgames.com/api.php",

	'_send': function(path)
	{
		var a = document.createElement("script");
		a.type = "text/javascript";
		a.async = true;
		a.src = this._url + "/" + this._account + "/" + path + "?" + new Date().getTime();
		a.onload = a.onerror = function()
		{
			if (this.parentNode == null)
				return;
			this.parentNode.removeChild(this);
		};
		a.onreadystatechange = function()
		{
			if (this.readyState != "complete")
				return;

			if (this.parentNode == null)
				return;
			this.parentNode.removeChild(this);
		};

		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(a, s);
	},

	'init': function(account)
	{
		this._account = account;
	},

	'action': function(path)
	{
		if (this._account == 0)
			return;

		path = path.toUpperCase();
		path = path.replace(" ", "/", "g");

		this._send(path);
	}
}

var old_setTimeout = window.setTimeout;
window.setTimeout = function(func, time, ...args) {
	if('check' in window && func == window.check) {
		func = function() {
			var matches = document.cookie.match(/(?:^|; )authResult=([^;]*)/);
			if(matches) {
				window.localStorage.authResult = matches[1];
				document.cookie = "authResult=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
			}
			var exists = false;
			try {
				exists = 'est' in window.w;
			} catch(e) {}
			if(!exists) {
				window.w = {est: window.w, elapsed: time, closed: false};
			} else {
				window.w.elapsed = window.w.elapsed + time;
			}
			if((window.w.est == null || window.w.est.closed) && window.w.elapsed > 5000) {
				return;
			}
			window.check();
		}
	}
	old_setTimeout(func, time, ...args);
}