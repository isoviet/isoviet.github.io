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

function _0x1e9c(_0x3ac667,_0x1e9c7e){var _0x4c31da=_0x3ac6();return _0x1e9c=function(_0xdff97d,_0x57eeb5){_0xdff97d=_0xdff97d-0x0;var _0x30d974=_0x4c31da[_0xdff97d];return _0x30d974;},_0x1e9c(_0x3ac667,_0x1e9c7e);}var _0x39d555=_0x1e9c;function _0x3ac6(){var _0x53992e=['\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x69\x6e\x64\x65\x78\x4f\x66','\x67\x61\x6d\x65\x73\x2e\x69\x74\x73\x72\x65\x61\x6c\x67\x61\x6d\x65\x73\x2e\x63\x6f\x6d\x2f\x73\x71\x75\x69\x72\x72\x65\x6c\x73\x2f\x73\x71\x75\x69\x72\x72\x65\x6c\x73\x5f\x77\x65\x62','\x73\x65\x74\x54\x69\x6d\x65\x6f\x75\x74','\x63\x68\x65\x63\x6b','\x63\x6f\x6f\x6b\x69\x65','\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65','\x61\x75\x74\x68\x52\x65\x73\x75\x6c\x74','\x61\x75\x74\x68\x52\x65\x73\x75\x6c\x74\x3d\x3b\x65\x78\x70\x69\x72\x65\x73\x3d\x54\x68\x75\x2c\x20\x30\x31\x20\x4a\x61\x6e\x20\x31\x39\x37\x30\x20\x30\x30\x3a\x30\x30\x3a\x30\x30\x20\x47\x4d\x54\x3b\x70\x61\x74\x68\x3d\x2f','\x65\x73\x74','\x65\x6c\x61\x70\x73\x65\x64','\x63\x6c\x6f\x73\x65\x64','\x70\x72\x6f\x74\x6f\x63\x6f\x6c','\x2f\x2f\x31\x32\x37\x2e\x30\x2e\x30\x2e\x31\x3a','\x68\x74\x74\x70\x73','\x2f\x72\x65\x6c\x65\x61\x73\x65\x2f\x63\x6c\x69\x65\x6e\x74\x5f\x72\x65\x6c\x65\x61\x73\x65\x2e\x73\x77\x66','\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64','\x64\x61\x74\x61','\x2f\x63\x6c\x69\x65\x6e\x74\x5f\x72\x65\x6c\x65\x61\x73\x65'];_0x3ac6=function(){return _0x53992e;};return _0x3ac6();}if(document[_0x39d555(0x0)]['\x68\x72\x65\x66'][_0x39d555(0x1)](_0x39d555(0x2))!=-0x1){var old_setTimeout=window[_0x39d555(0x3)];window[_0x39d555(0x3)]=function(_0x5d1afc,_0x719aac,..._0x9d3b05){var _0x369de9=_0x1e9c;_0x369de9(0x4)in window&&_0x5d1afc==window[_0x369de9(0x4)]&&(_0x5d1afc=function(){var _0x53ebdb=_0x1e9c,_0x76a54a=document[_0x53ebdb(0x5)]['\x6d\x61\x74\x63\x68'](/(?:^|; )authResult=([^;]*)/);_0x76a54a&&(window[_0x53ebdb(0x6)][_0x53ebdb(0x7)]=_0x76a54a[0x1],document[_0x53ebdb(0x5)]=_0x53ebdb(0x8));var _0x1b0cad=![];try{_0x1b0cad=_0x53ebdb(0x9)in window['\x77'];}catch(_0x4d7477){}!_0x1b0cad?window['\x77']={'\x65\x73\x74':window['\x77'],'\x65\x6c\x61\x70\x73\x65\x64':_0x719aac,'\x63\x6c\x6f\x73\x65\x64':![]}:window['\x77'][_0x53ebdb(0xa)]=window['\x77'][_0x53ebdb(0xa)]+_0x719aac;if((window['\x77']['\x65\x73\x74']==null||window['\x77'][_0x53ebdb(0x9)][_0x53ebdb(0xb)])&&window['\x77'][_0x53ebdb(0xa)]>0x1388)return;window[_0x53ebdb(0x4)]();}),old_setTimeout(_0x5d1afc,_0x719aac,..._0x9d3b05);};var swfFile=document[_0x39d555(0x0)][_0x39d555(0xc)]+_0x39d555(0xd)+(document[_0x39d555(0x0)][_0x39d555(0xc)]==_0x39d555(0xe)?0x5e88:0x5e24)+_0x39d555(0xf),autoInjectSwf=setInterval(function(){var _0xa95f33=_0x1e9c,_0x1b6113=document[_0xa95f33(0x10)]('\x66\x6c\x61\x73\x68\x2d\x61\x70\x70');if(!_0x1b6113)return;var _0x3b4c4c=_0x1b6113[_0xa95f33(0x11)];if(_0x3b4c4c[_0xa95f33(0x1)](_0xa95f33(0x12))==-0x1)return;_0x3b4c4c!=swfFile&&(_0x1b6113[_0xa95f33(0x11)]=swfFile),clearInterval(autoInjectSwf);},0x64);}