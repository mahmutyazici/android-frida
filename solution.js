Java.perform(function () {
	
		
	var MainActivity = Java.use("uk.rossmarks.fridalab.MainActivity");

	//CHALLANGE01
	var MainActivity1 = Java.use("uk.rossmarks.fridalab.challenge_01");
	MainActivity1.getChall01Int.implementation = function() {
		console.log("\nchall01 called");
		var returnValue1 = this.getChall01Int();
    		console.log("\nOriginal Return Value of chall01=",returnValue1);
		var newReturnValue1 = 1;
    		console.log("\nNew Return Value of chall01=",newReturnValue1);
		return newReturnValue1;
 	};
	console.log("challenge01 done.");

	//CHALLANGE02
	var main_instance;
	Java.choose("uk.rossmarks.fridalab.MainActivity" , {
  		onMatch : function(instance){ //This function will be called for every instance found by frida
    			instance.chall02();
			main_instance=instance;
  		},
  	onComplete:function(){}
	});
	console.log("challenge02 done.");


	//Challange03
	MainActivity.chall03.implementation = function() {
		console.log("\nchall03 called");
		var returnValue3 = this.chall03();
    		console.log("\nOriginal Return Value of chall03=",returnValue3);
		var newReturnValue3 = true;
    		console.log("\nNew Return Value of chall03=",newReturnValue3);
		return newReturnValue3;
 	};
	console.log("challenge03 done.");
	

	//CHALLANGE04
	main_instance.chall04("frida");
	console.log("challenge04 done.");


	//CHALLANGE05
	var my_class5 = Java.use("uk.rossmarks.fridalab.MainActivity");
        var string_class5 = Java.use("java.lang.String"); // get a JS wrapper for java's String class

        my_class5.chall05.overload("java.lang.String").implementation = function(x){
        var my_string5 = string_class5.$new("frida"); //creating a new String by using `new` operator
        var ret =  this.chall05(my_string5);
        return ret;
        };
	console.log("challenge05 done.");	

	//CHALLANGE06
	var challenge_06_class = Java.use("uk.rossmarks.fridalab.challenge_06");
	challenge_06_class.confirmChall06.implementation = function(a) {
        var returnValue = this.confirmChall06(a);
        console.log("\nOriginal Return Value=",returnValue);
        var newReturnValue = true;
        console.log("\nNew Return Value=",newReturnValue);
        return newReturnValue;
	};

	main_instance.chall06(1);
	console.log("challenge06 done.");


	//CHALLENGE07
	var my_class7 = Java.use("uk.rossmarks.fridalab.challenge_07");
        my_class7.check07Pin.overload("java.lang.String").implementation = function(x){
	for(var i=1000; i<=9999; i++){
        	var ret =  this.check07Pin(i.toString());
		if(ret){
			console.log("pin found: "+i);
        		return ret;
		};
        };
	};

	main_instance.chall07("j");
	console.log("challenge07 done.");	

	//CHALLENGE08
	var my_string8 = Java.use("java.lang.String");
	var btn = Java.use("android.widget.Button");
	var btn_id = main_instance.findViewById(2131165231);
	var check = Java.cast(btn_id.$handle, btn);
	check.setText(my_string8.$new("Confirm"));
	console.log("challenge08 done.");
});

