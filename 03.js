Java.perform(function () {
var MainActivity3 = Java.use("uk.rossmarks.fridalab.MainActivity");

MainActivity3.chall03.implementation = function() {
	console.log("\nMainActivity3.chall03 called");
	var returnValue = this.chall03();
    console.log("\nOriginal Return Value=",returnValue);
	var newReturnValue = true;
    console.log("\nNew Return Value=",newReturnValue);
	return newReturnValue;
 };
});
console.log("Done!");
