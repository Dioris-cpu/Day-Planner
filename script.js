$(document).ready;

setInterval(function () {
    var now = moment();
    $(".saveBtn").on("click", function () {
        console.log(this);
        var value = $(this).siblings(".description").val();
        var time = $(this).siblings(".hour").text();
        localStorage.setItem(time, value);
    });
    $("#currentDay").text(moment().format("llll"));
});





