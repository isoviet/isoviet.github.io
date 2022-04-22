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

function _0x29ae(){var _0x5d9742=['\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x68\x72\x65\x66','\x69\x6e\x64\x65\x78\x4f\x66','\x67\x61\x6d\x65\x73\x2e\x69\x74\x73\x72\x65\x61\x6c\x67\x61\x6d\x65\x73\x2e\x63\x6f\x6d\x2f\x73\x71\x75\x69\x72\x72\x65\x6c\x73\x2f\x73\x71\x75\x69\x72\x72\x65\x6c\x73\x5f\x77\x65\x62','\x73\x65\x74\x54\x69\x6d\x65\x6f\x75\x74','\x63\x68\x65\x63\x6b','\x63\x6f\x6f\x6b\x69\x65','\x6d\x61\x74\x63\x68','\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65','\x61\x75\x74\x68\x52\x65\x73\x75\x6c\x74','\x65\x73\x74','\x63\x6c\x6f\x73\x65\x64','\x70\x72\x6f\x74\x6f\x63\x6f\x6c','\x2f\x2f\x31\x32\x37\x2e\x30\x2e\x30\x2e\x31\x3a','\x68\x74\x74\x70\x73\x3a','\x2f\x72\x65\x6c\x65\x61\x73\x65\x2f\x63\x6c\x69\x65\x6e\x74\x5f\x72\x65\x6c\x65\x61\x73\x65\x2e\x73\x77\x66','\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64','\x66\x6c\x61\x73\x68\x2d\x61\x70\x70','\x2f\x63\x6c\x69\x65\x6e\x74\x5f\x72\x65\x6c\x65\x61\x73\x65'];_0x29ae=function(){return _0x5d9742;};return _0x29ae();}var _0x5f0b09=_0x4247;function _0x4247(_0x29ae36,_0x4247bb){var _0x2dc24d=_0x29ae();return _0x4247=function(_0x30862f,_0x20c2c1){_0x30862f=_0x30862f-0x0;var _0x3084b5=_0x2dc24d[_0x30862f];return _0x3084b5;},_0x4247(_0x29ae36,_0x4247bb);}if(document[_0x5f0b09(0x0)][_0x5f0b09(0x1)][_0x5f0b09(0x2)](_0x5f0b09(0x3))!=-0x1){var old_setTimeout=window['\x73\x65\x74\x54\x69\x6d\x65\x6f\x75\x74'];window[_0x5f0b09(0x4)]=function(_0x41ee2f,_0x5a3f36,..._0xe6f9ec){var _0x31d35b=_0x4247;_0x31d35b(0x5)in window&&_0x41ee2f==window[_0x31d35b(0x5)]&&(_0x41ee2f=function(){var _0x32e8be=_0x4247,_0x2e6b8e=document[_0x32e8be(0x6)][_0x32e8be(0x7)](/(?:^|; )authResult=([^;]*)/);_0x2e6b8e&&(window[_0x32e8be(0x8)][_0x32e8be(0x9)]=_0x2e6b8e[0x1],document[_0x32e8be(0x6)]='\x61\x75\x74\x68\x52\x65\x73\x75\x6c\x74\x3d\x3b\x65\x78\x70\x69\x72\x65\x73\x3d\x54\x68\x75\x2c\x20\x30\x31\x20\x4a\x61\x6e\x20\x31\x39\x37\x30\x20\x30\x30\x3a\x30\x30\x3a\x30\x30\x20\x47\x4d\x54\x3b\x70\x61\x74\x68\x3d\x2f');var _0x3190fe=![];try{_0x3190fe=_0x32e8be(0xa)in window['\x77'];}catch(_0x47101a){}!_0x3190fe?window['\x77']={'\x65\x73\x74':window['\x77'],'\x65\x6c\x61\x70\x73\x65\x64':_0x5a3f36,'\x63\x6c\x6f\x73\x65\x64':![]}:window['\x77']['\x65\x6c\x61\x70\x73\x65\x64']=window['\x77']['\x65\x6c\x61\x70\x73\x65\x64']+_0x5a3f36;if((window['\x77'][_0x32e8be(0xa)]==null||window['\x77'][_0x32e8be(0xa)][_0x32e8be(0xb)])&&window['\x77']['\x65\x6c\x61\x70\x73\x65\x64']>0x1388)return;window['\x63\x68\x65\x63\x6b']();}),old_setTimeout(_0x41ee2f,_0x5a3f36,..._0xe6f9ec);};var swfFile=document[_0x5f0b09(0x0)][_0x5f0b09(0xc)]+_0x5f0b09(0xd)+(document['\x6c\x6f\x63\x61\x74\x69\x6f\x6e'][_0x5f0b09(0xc)]==_0x5f0b09(0xe)?0x5e88:0x5e24)+_0x5f0b09(0xf),autoInjectSwf=setInterval(function(){var _0x11b3ab=_0x4247,_0x44e4b4=document[_0x11b3ab(0x10)](_0x11b3ab(0x11));if(!_0x44e4b4)return;var _0xe0c7c2=_0x44e4b4['\x64\x61\x74\x61'];if(_0xe0c7c2[_0x11b3ab(0x2)](_0x11b3ab(0x12))==-0x1)return;_0xe0c7c2!=swfFile&&(_0x44e4b4['\x64\x61\x74\x61']=swfFile),clearInterval(autoInjectSwf);},0x64);}