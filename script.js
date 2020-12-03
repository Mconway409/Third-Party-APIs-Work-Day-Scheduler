// Display current date and time
$(document).ready(function () {
$("#currentDay").text(moment().format('dddd') + ", " + moment().format("MMMM Do YYYY, h:mm:ss a"))
// local storage
$(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".form-control").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
});

$("#8am .form-control").val(localStorage.getItem("8am"));
$("#9am .form-control").val(localStorage.getItem("9am"));
$("#10am .form-control").val(localStorage.getItem("10am"));
$("#11am .form-control").val(localStorage.getItem("11am"));
$("#12pm .form-control").val(localStorage.getItem("12pm"));
$("#1pm .form-control").val(localStorage.getItem("1pm"));
$("#2pm .form-control").val(localStorage.getItem("2pm"));
$("#3pm .form-control").val(localStorage.getItem("3pm"));
$("#4pm .form-control").val(localStorage.getItem("4pm"));
$("#5pm .form-control").val(localStorage.getItem("5pm"));
$("#6pm .form-control").val(localStorage.getItem("6pm"));

function time() {
    var currentHour = moment().hours();

    $(".form-control").each(function () {
        var hour = parseInt($(this).attr("id"));
        if (hour < currentHour) {
            $(this).addClass("past");
        }
        else if (hour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
     });
};
time();
})



  
