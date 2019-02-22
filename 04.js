Java.perform(function () {

	var main;
    	Java.choose('uk.rossmarks.fridalab.MainActivity', {
                onMatch: function(instance) {
    			main = instance;
                },
                onComplete: function() {}
         });
	main.chall04("frida");
	
});
