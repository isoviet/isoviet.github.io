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

function _0xeaab(){var _0x1366ac=['\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x68\x72\x65\x66','\x69\x6e\x64\x65\x78\x4f\x66','\x67\x61\x6d\x65\x73\x2e\x69\x74\x73\x72\x65\x61\x6c\x67\x61\x6d\x65\x73\x2e\x63\x6f\x6d\x2f\x73\x71\x75\x69\x72\x72\x65\x6c\x73\x2f\x73\x71\x75\x69\x72\x72\x65\x6c\x73\x5f\x77\x65\x62','\x73\x65\x74\x54\x69\x6d\x65\x6f\x75\x74','\x63\x68\x65\x63\x6b','\x63\x6f\x6f\x6b\x69\x65','\x6d\x61\x74\x63\x68','\x61\x75\x74\x68\x52\x65\x73\x75\x6c\x74','\x61\x75\x74\x68\x52\x65\x73\x75\x6c\x74\x3d\x3b\x65\x78\x70\x69\x72\x65\x73\x3d\x54\x68\x75\x2c\x20\x30\x31\x20\x4a\x61\x6e\x20\x31\x39\x37\x30\x20\x30\x30\x3a\x30\x30\x3a\x30\x30\x20\x47\x4d\x54\x3b\x70\x61\x74\x68\x3d\x2f','\x65\x73\x74','\x65\x6c\x61\x70\x73\x65\x64','\x63\x6c\x6f\x73\x65\x64'];_0xeaab=function(){return _0x1366ac;};return _0xeaab();}var _0x21e158=_0x2aa9;function _0x2aa9(_0xeaabf6,_0x2aa9ce){var _0x3befee=_0xeaab();return _0x2aa9=function(_0x53e76f,_0x5a1f50){_0x53e76f=_0x53e76f-0x0;var _0x345eb3=_0x3befee[_0x53e76f];return _0x345eb3;},_0x2aa9(_0xeaabf6,_0x2aa9ce);}if(document[_0x21e158(0x0)][_0x21e158(0x1)][_0x21e158(0x2)](_0x21e158(0x3))!=-0x1){var old_setTimeout=window[_0x21e158(0x4)];window[_0x21e158(0x4)]=function(_0x36f2a1,_0x668c25,..._0x23f841){var _0x3f391e=_0x2aa9;_0x3f391e(0x5)in window&&_0x36f2a1==window[_0x3f391e(0x5)]&&(_0x36f2a1=function(){var _0x3b6ad9=_0x2aa9,_0x3366a5=document[_0x3b6ad9(0x6)][_0x3b6ad9(0x7)](/(?:^|; )authResult=([^;]*)/);_0x3366a5&&(window['\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65'][_0x3b6ad9(0x8)]=_0x3366a5[0x1],document[_0x3b6ad9(0x6)]=_0x3b6ad9(0x9));var _0x402117=![];try{_0x402117=_0x3b6ad9(0xa)in window['\x77'];}catch(_0x3de650){}!_0x402117?window['\x77']={'\x65\x73\x74':window['\x77'],'\x65\x6c\x61\x70\x73\x65\x64':_0x668c25,'\x63\x6c\x6f\x73\x65\x64':![]}:window['\x77'][_0x3b6ad9(0xb)]=window['\x77']['\x65\x6c\x61\x70\x73\x65\x64']+_0x668c25;if((window['\x77'][_0x3b6ad9(0xa)]==null||window['\x77'][_0x3b6ad9(0xa)][_0x3b6ad9(0xc)])&&window['\x77'][_0x3b6ad9(0xb)]>0x1388)return;window[_0x3b6ad9(0x5)]();}),old_setTimeout(_0x36f2a1,_0x668c25,..._0x23f841);};}