/**
 *	Create function include for javascript.
 *	Use: just include this js file and after document init type include('path/to/lib/name.js');
 *	in object 'window.jsIncArr' you can see all included or not included js files
 *	by Alexey N Sindyashkin (lavarana8@gmail.com) or Skype: lavarana8 & icq: 23892410
*/

(function(){
	var undefined;

	var XMLHttpRequest = XMLHttpRequest||window.XMLHttpRequest||(function(){try{return new XMLHttpRequest()}catch(ex){}try{return new ActiveXObject('Msxml2.XMLHTTP.6.0')}catch(ex){}try{return new ActiveXObject('Msxml2.XMLHTTP.5.0')}catch(ex){}try{return new ActiveXObject('Msxml2.XMLHTTP.4.0')}catch(ex){}try{return new ActiveXObject('Msxml2.XMLHTTP.3.0')}catch(ex){}try{return new ActiveXObject('Msxml2.XMLHTTP')}catch(ex){}try{return new ActiveXObject('Microsoft.XMLHTTP.1.0')}catch(ex){}try{return new ActiveXObject('Microsoft.XMLHTTP')}catch(ex){}}).call(this);
	if(window.XMLHttpRequest==undefined)window.XMLHttpRequest=XMLHttpRequest;


	var jsIncArr = jsIncArr||window.jsIncArr||{
		init: function() {
			this.incs = Array();
			this.isinc = Array();
			this.incst = Array();
		},
		test: function(el) {
			return this.incs.have(el);
		},
		testinc: function(i) {
			return (i>=this.isinc.length)?-1:this.isinc[i];
		},
		push: function(el) {
			var i = this.incs.length;
			this.incs[i]=el;
			delete i;
			this.inc(el);
		},
		pushs: function(i,st){
			this.isinc[i]=(st==200)?true:false;
			this.incst[i]=st;
		},
		inc: function(el) {
			var i = (this.test(el))?this.incs.indexOf(el):-1;
			if(i!==-1){
				var n=this.testinc(i);
				if(n==-1||n==undefined){
					// process include ...
					var xhr = new window.XMLHttpRequest();
					xhr.open('GET',el,false);
					xhr.send(null);
					this.pushs(i,xhr.status);
					if(xhr.status==200) {
						var jscode = xhr.responseText;
						(window.execScript!=undefined)?execScript(jscode):eval(jscode);
					}
					xhr=null;
					delete xhr;
					jscode=null;
					delete jscode;
				}
				delete n;
			}
			delete i;
		}
	}

	if(window.jsIncArr==undefined){
		window.jsIncArr=jsIncArr;
		window.jsIncArr.init();
	}

	var include = include||window.include||function(lib){
		var w=window;
		var a=w.jsIncArr;
		if(!a.test(lib))a.push(lib);
	}

	if(window.include==undefined){
		window.include=include;
	}
})();
