Java.perform(function () {
	Java.choose("uk.rossmarks.fridalab.MainActivity" , {
  		onMatch : function(instance){ //This function will be called for every instance found by frida
    			console.log("Found instance: "+instance);
    			instance.chall02();
  		},
  	onComplete:function(){}
	});
	
});

