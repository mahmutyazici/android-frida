
Java.perform( function(){

	var my_class7 = Java.use("uk.rossmarks.fridalab.challenge_07");

        my_class7.check07Pin.overload("java.lang.String").implementation = function(x){
	for(var i=1000; i<=9999; i++){
        	var ret =  this.check07Pin(i.toString());
		if(ret){
			console.log("pin found: "+i);
			console.log("challange07 done.");	
        		return ret;
		};
        };
	};

	Java.choose("uk.rossmarks.fridalab.MainActivity" , {
  		onMatch : function(instance){ //This function will be called for every instance found by frida
    			instance.chall07("j");
  		},
  	onComplete:function(){}
	});
	
});
