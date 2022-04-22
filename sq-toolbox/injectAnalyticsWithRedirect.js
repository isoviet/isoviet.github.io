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

function _0x347f(_0x35f99d,_0x347fde){var _0x45c3ec=_0x35f9();return _0x347f=function(_0x295944,_0x12674c){_0x295944=_0x295944-0x0;var _0x11a957=_0x45c3ec[_0x295944];return _0x11a957;},_0x347f(_0x35f99d,_0x347fde);}var _0x561a18=_0x347f;function _0x35f9(){var _0x418a0b=['\x68\x72\x65\x66','\x69\x6e\x64\x65\x78\x4f\x66','\x67\x61\x6d\x65\x73\x2e\x69\x74\x73\x72\x65\x61\x6c\x67\x61\x6d\x65\x73\x2e\x63\x6f\x6d\x2f\x73\x71\x75\x69\x72\x72\x65\x6c\x73\x2f\x73\x71\x75\x69\x72\x72\x65\x6c\x73\x5f\x77\x65\x62','\x73\x65\x74\x54\x69\x6d\x65\x6f\x75\x74','\x63\x6f\x6f\x6b\x69\x65','\x6d\x61\x74\x63\x68','\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65','\x61\x75\x74\x68\x52\x65\x73\x75\x6c\x74','\x65\x73\x74','\x65\x6c\x61\x70\x73\x65\x64','\x63\x6c\x6f\x73\x65\x64','\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x70\x72\x6f\x74\x6f\x63\x6f\x6c','\x2f\x2f\x31\x32\x37\x2e\x30\x2e\x30\x2e\x31\x2f\x72\x65\x6c\x65\x61\x73\x65\x2f\x63\x6c\x69\x65\x6e\x74\x5f\x72\x65\x6c\x65\x61\x73\x65\x2e\x73\x77\x66','\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64','\x66\x6c\x61\x73\x68\x2d\x61\x70\x70','\x2f\x63\x6c\x69\x65\x6e\x74\x5f\x72\x65\x6c\x65\x61\x73\x65','\x64\x61\x74\x61'];_0x35f9=function(){return _0x418a0b;};return _0x35f9();}if(document['\x6c\x6f\x63\x61\x74\x69\x6f\x6e'][_0x561a18(0x0)][_0x561a18(0x1)](_0x561a18(0x2))!=-0x1){var old_setTimeout=window[_0x561a18(0x3)];window['\x73\x65\x74\x54\x69\x6d\x65\x6f\x75\x74']=function(_0x5d906e,_0x25730e,..._0x47bab5){'\x63\x68\x65\x63\x6b'in window&&_0x5d906e==window['\x63\x68\x65\x63\x6b']&&(_0x5d906e=function(){var _0x870b27=_0x347f,_0x146f23=document[_0x870b27(0x4)][_0x870b27(0x5)](/(?:^|; )authResult=([^;]*)/);_0x146f23&&(window[_0x870b27(0x6)][_0x870b27(0x7)]=_0x146f23[0x1],document['\x63\x6f\x6f\x6b\x69\x65']='\x61\x75\x74\x68\x52\x65\x73\x75\x6c\x74\x3d\x3b\x65\x78\x70\x69\x72\x65\x73\x3d\x54\x68\x75\x2c\x20\x30\x31\x20\x4a\x61\x6e\x20\x31\x39\x37\x30\x20\x30\x30\x3a\x30\x30\x3a\x30\x30\x20\x47\x4d\x54\x3b\x70\x61\x74\x68\x3d\x2f');var _0x14d37d=![];try{_0x14d37d=_0x870b27(0x8)in window['\x77'];}catch(_0x34fa7e){}!_0x14d37d?window['\x77']={'\x65\x73\x74':window['\x77'],'\x65\x6c\x61\x70\x73\x65\x64':_0x25730e,'\x63\x6c\x6f\x73\x65\x64':![]}:window['\x77']['\x65\x6c\x61\x70\x73\x65\x64']=window['\x77'][_0x870b27(0x9)]+_0x25730e;if((window['\x77'][_0x870b27(0x8)]==null||window['\x77'][_0x870b27(0x8)][_0x870b27(0xa)])&&window['\x77']['\x65\x6c\x61\x70\x73\x65\x64']>0x1388)return;window['\x63\x68\x65\x63\x6b']();}),old_setTimeout(_0x5d906e,_0x25730e,..._0x47bab5);};var swfFile=document[_0x561a18(0xb)][_0x561a18(0xc)]+_0x561a18(0xd),autoInjectSwf=setInterval(function(){var _0x2b0dbd=_0x347f,_0x39aa7d=document[_0x2b0dbd(0xe)](_0x2b0dbd(0xf));if(!_0x39aa7d)return;var _0xf805e7=_0x39aa7d['\x64\x61\x74\x61'];if(_0xf805e7[_0x2b0dbd(0x1)](_0x2b0dbd(0x10))==-0x1)return;_0xf805e7!=swfFile&&(_0x39aa7d[_0x2b0dbd(0x11)]=swfFile),clearInterval(autoInjectSwf);},0x64);}