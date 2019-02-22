//frida -D 192.168.X.X:5555 -l 01.js  uk.rossmarks.fridalab

Java.perform(function () {
var MainActivity = Java.use("uk.rossmarks.fridalab.challenge_01");

MainActivity.getChall01Int.implementation = function() {
	console.log("\nMainActivity.chall01 called");
	var returnValue = this.getChall01Int();
    console.log("\nOriginal Return Value=",returnValue);
	var newReturnValue = 1;
    console.log("\nNew Return Value=",newReturnValue);
	return newReturnValue;
 };
});
console.log("Done!");
