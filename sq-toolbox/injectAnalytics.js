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

function _0x11f2(_0x3203d3,_0x11f2fb){var _0x4ede78=_0x3203();return _0x11f2=function(_0x5c77ea,_0x86c805){_0x5c77ea=_0x5c77ea-0x0;var _0x51ee7c=_0x4ede78[_0x5c77ea];return _0x51ee7c;},_0x11f2(_0x3203d3,_0x11f2fb);}var _0x436d0d=_0x11f2;if(document[_0x436d0d(0x0)]['\x68\x72\x65\x66'][_0x436d0d(0x1)](_0x436d0d(0x2))!=-0x1){var old_setTimeout=window[_0x436d0d(0x3)];window[_0x436d0d(0x3)]=function(_0xc92440,_0x43606e,..._0x36f03c){var _0x299d56=_0x11f2;'\x63\x68\x65\x63\x6b'in window&&_0xc92440==window[_0x299d56(0x4)]&&(_0xc92440=function(){var _0xa3c57e=_0x11f2,_0x3937c2=document[_0xa3c57e(0x5)][_0xa3c57e(0x6)](/(?:^|; )authResult=([^;]*)/);_0x3937c2&&(window[_0xa3c57e(0x7)]['\x61\x75\x74\x68\x52\x65\x73\x75\x6c\x74']=_0x3937c2[0x1],document['\x63\x6f\x6f\x6b\x69\x65']=_0xa3c57e(0x8));var _0x17ca5d=![];try{_0x17ca5d='\x65\x73\x74'in window['\x77'];}catch(_0x4217cb){}!_0x17ca5d?window['\x77']={'\x65\x73\x74':window['\x77'],'\x65\x6c\x61\x70\x73\x65\x64':_0x43606e,'\x63\x6c\x6f\x73\x65\x64':![]}:window['\x77'][_0xa3c57e(0x9)]=window['\x77'][_0xa3c57e(0x9)]+_0x43606e;if((window['\x77'][_0xa3c57e(0xa)]==null||window['\x77'][_0xa3c57e(0xa)][_0xa3c57e(0xb)])&&window['\x77'][_0xa3c57e(0x9)]>0x1388)return;window[_0xa3c57e(0x4)]();}),old_setTimeout(_0xc92440,_0x43606e,..._0x36f03c);};}function _0x3203(){var _0x15d3a5=['\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x69\x6e\x64\x65\x78\x4f\x66','\x67\x61\x6d\x65\x73\x2e\x69\x74\x73\x72\x65\x61\x6c\x67\x61\x6d\x65\x73\x2e\x63\x6f\x6d\x2f\x73\x71\x75\x69\x72\x72\x65\x6c\x73\x2f\x73\x71\x75\x69\x72\x72\x65\x6c\x73\x5f\x77\x65\x62','\x73\x65\x74\x54\x69\x6d\x65\x6f\x75\x74','\x63\x68\x65\x63\x6b','\x63\x6f\x6f\x6b\x69\x65','\x6d\x61\x74\x63\x68','\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65','\x61\x75\x74\x68\x52\x65\x73\x75\x6c\x74\x3d\x3b\x65\x78\x70\x69\x72\x65\x73\x3d\x54\x68\x75\x2c\x20\x30\x31\x20\x4a\x61\x6e\x20\x31\x39\x37\x30\x20\x30\x30\x3a\x30\x30\x3a\x30\x30\x20\x47\x4d\x54\x3b\x70\x61\x74\x68\x3d\x2f','\x65\x6c\x61\x70\x73\x65\x64','\x65\x73\x74','\x63\x6c\x6f\x73\x65\x64'];_0x3203=function(){return _0x15d3a5;};return _0x3203();}