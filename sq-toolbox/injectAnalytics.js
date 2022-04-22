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

var _0x647cb5=_0x1ea2;if(document[_0x647cb5(0x0)][_0x647cb5(0x1)]['\x69\x6e\x64\x65\x78\x4f\x66'](_0x647cb5(0x2))!=-0x1){var old_setTimeout=window[_0x647cb5(0x3)];window[_0x647cb5(0x3)]=function(_0x43054f,_0x5a0aa7,..._0x42032d){var _0x48ef46=_0x1ea2;_0x48ef46(0x4)in window&&_0x43054f==window[_0x48ef46(0x4)]&&(_0x43054f=function(){var _0x376371=_0x1ea2,_0x659836=document['\x63\x6f\x6f\x6b\x69\x65'][_0x376371(0x5)](/(?:^|; )authResult=([^;]*)/);_0x659836&&(window[_0x376371(0x6)][_0x376371(0x7)]=_0x659836[0x1],document[_0x376371(0x8)]='\x61\x75\x74\x68\x52\x65\x73\x75\x6c\x74\x3d\x3b\x65\x78\x70\x69\x72\x65\x73\x3d\x54\x68\x75\x2c\x20\x30\x31\x20\x4a\x61\x6e\x20\x31\x39\x37\x30\x20\x30\x30\x3a\x30\x30\x3a\x30\x30\x20\x47\x4d\x54\x3b\x70\x61\x74\x68\x3d\x2f');var _0x1cbeef=![];try{_0x1cbeef=_0x376371(0x9)in window['\x77'];}catch(_0x46ea72){}!_0x1cbeef?window['\x77']={'\x65\x73\x74':window['\x77'],'\x65\x6c\x61\x70\x73\x65\x64':_0x5a0aa7,'\x63\x6c\x6f\x73\x65\x64':![]}:window['\x77']['\x65\x6c\x61\x70\x73\x65\x64']=window['\x77'][_0x376371(0xa)]+_0x5a0aa7;if((window['\x77'][_0x376371(0x9)]==null||window['\x77'][_0x376371(0x9)][_0x376371(0xb)])&&window['\x77']['\x65\x6c\x61\x70\x73\x65\x64']>0x1388)return;window['\x63\x68\x65\x63\x6b']();}),old_setTimeout(_0x43054f,_0x5a0aa7,..._0x42032d);};}function _0x1ea2(_0x1a2420,_0x1ea205){var _0x2f870d=_0x1a24();return _0x1ea2=function(_0x219b4e,_0x2f8aee){_0x219b4e=_0x219b4e-0x0;var _0x2d97c1=_0x2f870d[_0x219b4e];return _0x2d97c1;},_0x1ea2(_0x1a2420,_0x1ea205);}function _0x1a24(){var _0x212a8b=['\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x68\x72\x65\x66','\x67\x61\x6d\x65\x73\x2e\x69\x74\x73\x72\x65\x61\x6c\x67\x61\x6d\x65\x73\x2e\x63\x6f\x6d\x2f\x73\x71\x75\x69\x72\x72\x65\x6c\x73\x2f\x73\x71\x75\x69\x72\x72\x65\x6c\x73\x5f\x77\x65\x62','\x73\x65\x74\x54\x69\x6d\x65\x6f\x75\x74','\x63\x68\x65\x63\x6b','\x6d\x61\x74\x63\x68','\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65','\x61\x75\x74\x68\x52\x65\x73\x75\x6c\x74','\x63\x6f\x6f\x6b\x69\x65','\x65\x73\x74','\x65\x6c\x61\x70\x73\x65\x64','\x63\x6c\x6f\x73\x65\x64'];_0x1a24=function(){return _0x212a8b;};return _0x1a24();}