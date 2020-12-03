// Display current date and time
$(document).ready(function () {
$("#currentDay").text(moment().format('dddd') + ", " + moment().format("MMMM Do YYYY, h:mm:ss a"))
// local storage
$(".saveBtn").on("click", function () {
    var info = $(this).parent(".form-control").val();
    var time = $(this).siblings().attr("id");
    localStorage.setItem(info, time)
    console.log(this);
});


function time() {
    var currentHour = moment().hours();

    $(".form-control").each(function () {
        var timeSlot = parseInt($(this).attr("id"));
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



  
