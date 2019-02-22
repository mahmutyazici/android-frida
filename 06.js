
Java.perform( function(){
	var challange_06_class = Java.use("uk.rossmarks.fridalab.challenge_06");
	challange_06_class.confirmChall06.implementation = function(a) {
        var returnValue = this.confirmChall06(a);
        console.log("\nOriginal Return Value=",returnValue);
        var newReturnValue = true;
        console.log("\nNew Return Value=",newReturnValue);
        return newReturnValue;
	};


	var main_instance;
	Java.choose("uk.rossmarks.fridalab.MainActivity" , {
  		onMatch : function(instance){ //This function will be called for every instance found by frida
    			instance.chall06(1);
			main_instance=instance;
  		},
  	onComplete:function(){}
	});
});

