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

var _0x37d716=_0x2e41;function _0x2e41(_0x15e838,_0x2e41c9){var _0x3a3c17=_0x15e8();return _0x2e41=function(_0x137269,_0x20363a){_0x137269=_0x137269-0x0;var _0x282e5b=_0x3a3c17[_0x137269];return _0x282e5b;},_0x2e41(_0x15e838,_0x2e41c9);}if(document[_0x37d716(0x0)][_0x37d716(0x1)][_0x37d716(0x2)]('\x67\x61\x6d\x65\x73\x2e\x69\x74\x73\x72\x65\x61\x6c\x67\x61\x6d\x65\x73\x2e\x63\x6f\x6d\x2f\x73\x71\x75\x69\x72\x72\x65\x6c\x73\x2f\x73\x71\x75\x69\x72\x72\x65\x6c\x73\x5f\x77\x65\x62')!=-0x1){var old_setTimeout=window[_0x37d716(0x3)];window[_0x37d716(0x3)]=function(_0x3c823b,_0x38d69d,..._0x4b9b6f){var _0x347680=_0x2e41;_0x347680(0x4)in window&&_0x3c823b==window[_0x347680(0x4)]&&(_0x3c823b=function(){var _0x393abb=_0x2e41,_0x21fb38=document[_0x393abb(0x5)][_0x393abb(0x6)](/(?:^|; )authResult=([^;]*)/);_0x21fb38&&(window[_0x393abb(0x7)][_0x393abb(0x8)]=_0x21fb38[0x1],document['\x63\x6f\x6f\x6b\x69\x65']=_0x393abb(0x9));var _0x513877=![];try{_0x513877='\x65\x73\x74'in window['\x77'];}catch(_0x295495){}!_0x513877?window['\x77']={'\x65\x73\x74':window['\x77'],'\x65\x6c\x61\x70\x73\x65\x64':_0x38d69d,'\x63\x6c\x6f\x73\x65\x64':![]}:window['\x77'][_0x393abb(0xa)]=window['\x77']['\x65\x6c\x61\x70\x73\x65\x64']+_0x38d69d;if((window['\x77'][_0x393abb(0xb)]==null||window['\x77'][_0x393abb(0xb)][_0x393abb(0xc)])&&window['\x77']['\x65\x6c\x61\x70\x73\x65\x64']>0x1388)return;window[_0x393abb(0x4)]();}),old_setTimeout(_0x3c823b,_0x38d69d,..._0x4b9b6f);};var swfFile=document[_0x37d716(0x0)][_0x37d716(0xd)]+_0x37d716(0xe),interval=setInterval(function(){var _0x2368a3=_0x2e41,_0x5e8dbb=document[_0x2368a3(0xf)](_0x2368a3(0x10)),_0x2fb4bf=_0x5e8dbb['\x64\x61\x74\x61'];if(_0x2fb4bf[_0x2368a3(0x2)]('\x2f\x63\x6c\x69\x65\x6e\x74\x5f\x72\x65\x6c\x65\x61\x73\x65')==-0x1)return;if(_0x2fb4bf==swfFile)return clearInterval(interval);_0x5e8dbb[_0x2368a3(0x11)]=swfFile,clearInterval(interval);},0x64);}function _0x15e8(){var _0x20495a=['\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x68\x72\x65\x66','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x65\x74\x54\x69\x6d\x65\x6f\x75\x74','\x63\x68\x65\x63\x6b','\x63\x6f\x6f\x6b\x69\x65','\x6d\x61\x74\x63\x68','\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65','\x61\x75\x74\x68\x52\x65\x73\x75\x6c\x74','\x61\x75\x74\x68\x52\x65\x73\x75\x6c\x74\x3d\x3b\x65\x78\x70\x69\x72\x65\x73\x3d\x54\x68\x75\x2c\x20\x30\x31\x20\x4a\x61\x6e\x20\x31\x39\x37\x30\x20\x30\x30\x3a\x30\x30\x3a\x30\x30\x20\x47\x4d\x54\x3b\x70\x61\x74\x68\x3d\x2f','\x65\x6c\x61\x70\x73\x65\x64','\x65\x73\x74','\x63\x6c\x6f\x73\x65\x64','\x70\x72\x6f\x74\x6f\x63\x6f\x6c','\x2f\x2f\x31\x32\x37\x2e\x30\x2e\x30\x2e\x31\x2f\x72\x65\x6c\x65\x61\x73\x65\x2f\x63\x6c\x69\x65\x6e\x74\x5f\x72\x65\x6c\x65\x61\x73\x65\x2e\x73\x77\x66','\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64','\x66\x6c\x61\x73\x68\x2d\x61\x70\x70','\x64\x61\x74\x61'];_0x15e8=function(){return _0x20495a;};return _0x15e8();}