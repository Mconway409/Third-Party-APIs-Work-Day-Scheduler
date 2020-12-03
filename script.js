// Display current date and time
$(document).ready(function () {
$("#currentDay").text(moment().format('dddd') + ", " + moment().format("MMMM Do YYYY, h:mm:ss a"))
// local storage
$(".saveBtn").on("click", function () {
    var info = $(this).parent().siblings("textarea").val();
    var time = $(this).siblings().attr("id");
    localStorage.setItem(info, time)
    console.log(info, time);
});

$("#8oclock").val(localStorage.getItem("8oclock"));
$("#9oclock").val(localStorage.getItem("9oclock"));
$("#10oclock").val(localStorage.getItem("10oclock"));
$("#11oclock").val(localStorage.getItem("11oclock"));
$("#12oclock").val(localStorage.getItem("12oclock"));
$("#13oclock").val(localStorage.getItem("13oclock"));
$("#14oclock").val(localStorage.getItem("14oclock"));
$("#15oclock").val(localStorage.getItem("15oclock"));
$("#16oclock").val(localStorage.getItem("16oclock"));
$("#17oclock").val(localStorage.getItem("17oclock"));
$("#18oclock").val(localStorage.getItem("18oclock"));

function time() {
    var currentHour = moment().hours();

    $(".form-control").each(function () {
        var timeSlot = parseInt($(this).attr("id"));
        console.log(timeSlot, currentHour);
        if (timeSlot < currentHour) {
            $(this).addClass("past");
            
        }
        else if (timeSlot === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
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



  
