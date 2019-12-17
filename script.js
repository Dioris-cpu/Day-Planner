var firstElt = document.getElementById("first");


$(document).ready;

setInterval(function () {
    var now = moment();
    $(".saveBtn").on("click", function () {
        console.log(this);
        var value = $(this).siblings(".description").val();
        var time = $(this).siblings(".hour").text();
        localStorage.setItem(time, value);
        if(time && value){
            localStorage.setItem(time,value);
            location.reload()
        }
        for(var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);

            firstElt.innerHTML += '${key}: ${value}<br />';

        }    
    });
   
    $("#currentDay").text(moment().format("llll"));
});





