/**
 *	Array extend functions.
 *	@version: 0.1b
 *	@Author: Alexey N Sindyashkin (lavarana8@gmail.com)
 *	@License: free for all.
*/
;(function(){

/**
 *	Clear array function. 
 *	If array have subarray or subobjects - then clear them.
*/
Array.prototype.clear = function() {
	for(var i=0,l=this.length;i<l;i++) {
		var r = this.pop();
		if(typeof(r)=='object')
			if(r.constructor.name=='Array')
				r = r.clear();
			else if('clear' in r) 
				r = r.clear();
			else 
				r = null;
	}
	return null;
}


/**
 *	Method 'Array.have'.
 *	Is element already in array. 
 *	@param ArrayElement
 *	@return True if element in array or False elswere
*/
Array.prototype.have = (Array.prototype.indexOf===undefined)?
	function (val) {var i=this.length;while(i--)if(this[i]===val)return true;return false}:
	function (val) {return this.indexOf(val)!=-1};


/**
 *	Method 'Array.indexOf'.
 *	return index of element in array
 *	@param ArrayElement
 *	@return Array index
*/
if(Array.prototype.indexOf===undefined)
	Array.prototype.indexOf=function(val){
		var i=this.length;
		while(i--)
			if(this[i]===val)
				return i;
		return false
	}

})(Array);

