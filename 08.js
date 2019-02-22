
Java.perform( function(){

	var my_string8 = Java.use("java.lang.String");
	var btn = Java.use("android.widget.Button");
	var btn_id = main_instance.findViewById(2131165231);
	var check = Java.cast(btn_id.$handle, btn);
	check.setText(my_string8.$new("Confirm"));
	console.log("challenge08 done.");	

});
