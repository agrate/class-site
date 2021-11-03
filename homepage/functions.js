$(function(){

var thehours = new Date().getHours();
	var themessage;
	var morning = ('Good morning');
	var evening = ('Good evening');

	if (thehours >= 0 && thehours < 17) {
		themessage = morning;
    $("#greeting").addClass("morning");

    $(".coffee").addClass("active");
    $(".wine").removeClass("active");

	} else if (thehours >= 17 && thehours < 24) {
		themessage = evening;
    $("#greeting").addClass("evening");

    $(".coffee").removeClass("active");
    $(".wine").addClass("active");
	}



});
