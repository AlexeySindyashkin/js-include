var ob = function(){this.ar=Array();}
ob.prototype.set = function(a){this.ar.push(a);}
ob.prototype.clear = function(){this.ar = this.ar.clear();return null;}

if(!window.ob)window.ob=ob;
