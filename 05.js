Java.perform( function(){
	
	var my_class = Java.use("uk.rossmarks.fridalab.MainActivity");
	var string_class = Java.use("java.lang.String"); // get a JS wrapper for java's String class

	my_class.chall05.overload("java.lang.String").implementation = function(x){ 
  	var my_string = string_class.$new("frida"); //creating a new String by using `new` operator 
  	var ret =  this.chall05(my_string); 
  	return ret;
	};
});
