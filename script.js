$(document).ready(function () {
    var firstElt = document.getElementById("first");
    //var presentElt = document.getElementsByClassName("present");
    //var pastElt = document.getElementsByClassName("past");
    //var futureElt = document.getElementsByClassName("future");




    setInterval(function () {
        var now = moment();
        var formatString = "llll"
        var current = moment().format(formatString);
        $("#currentDay").text(current);
        // add function

        var nine = moment().set({ h: 9, m: 0 }).format(formatString);
        var nineEnd = moment().set({ h: 9, m: 59 }).format(formatString);
        var currentMoment = moment(current)
        
        if (currentMoment.isBefore(nineEnd) && currentMoment.isAfter(nine)) {
            // add current time class
            $('#first').addClass("present");

            
        } else if (currentMoment.isBefore(nine)) {
            // give nine the future color
            $('#first').addClass("future");

            
        } else if (currentMoment.isAfter(nine)) {
            // give nine the past color
            $('#first').addClass("past");

            
        }
        var ten = moment().set({ h: 10, m: 0 }).format(formatString);
        var tenEnd = moment().set({ h: 10, m: 59 }).format(formatString);

        if (currentMoment.isBefore(tenEnd) && currentMoment.isAfter(ten)) {
            // add current time class
            $('#second').addClass("present");

            
        } else if (currentMoment.isBefore(ten)) {
            // give ten the future color
            $('#second').addClass("future");

            
        } else if (currentMoment.isAfter(ten)) {
            // give nine the past color
            $('#second').addClass("past");

            
        }


        var eleven = moment().set({ h: 11, m: 0 }).format(formatString);
        var elevenEnd = moment().set({ h: 11, m: 59 }).format(formatString);

        if (currentMoment.isBefore(elevenEnd) && currentMoment.isAfter(eleven)) {
            // add current time class
            $('#third').addClass("present");

            
        } else if (currentMoment.isBefore(eleven)) {
            // give eleven the future color
            $('#third').addClass("future");
            
        } else if (currentMoment.isAfter(eleven)) {
            // give nine the past color
            $('#third').addClass("past");
            
        }

        var twelve = moment().set({ h: 12, m: 0 }).format(formatString);
        var twelveEnd = moment().set({ h: 12, m: 59 }).format(formatString);

        if (currentMoment.isBefore(twelveEnd) && currentMoment.isAfter(twelve)) {
            // add current time class
            $('#fourth').addClass("present");

            
        } else if (currentMoment.isBefore(twelve)) {
            // give twelve the future color
            $('#fourth').addClass("future");
            
        } else if (currentMoment.isAfter(twelve)) {
            // give nine the past color
            $('#fourth').addClass("past");
            
        }

        var one = moment().set({ h: 13, m: 0 }).format(formatString);
        var oneEnd = moment().set({ h: 13, m: 59 }).format(formatString);

        if (currentMoment.isBefore(oneEnd) && currentMoment.isAfter(one)) {
            // add current time class
            $('#fifth').addClass("present");

            
        } else if (currentMoment.isBefore(one)) {
            // give one the future color
            $('#fifth').addClass("future");
            
        } else if (currentMoment.isAfter(one)) {
            // give nine the past color
            $('#fifth').addClass("past");
            
        }

        var two = moment().set({ h: 14, m: 0 }).format(formatString);
        var twoEnd = moment().set({ h: 14, m: 59 }).format(formatString);

        if (currentMoment.isBefore(twoEnd) && currentMoment.isAfter(two)) {
            // add current time class
            $('#sixth').addClass("present");

            
        } else if (currentMoment.isBefore(two)) {
            // give two the future color
            $('#sixth').addClass("future");
            
        } else if (currentMoment.isAfter(two)) {
            // give nine the past color
            $('#sixth').addClass("past");
            
        }

        var three = moment().set({ h: 15, m: 0 }).format(formatString);
        var threeEnd = moment().set({ h: 15, m: 59 }).format(formatString);

        if (currentMoment.isBefore(threeEnd) && currentMoment.isAfter(three)) {
            // add current time class
            $('#seventh').addClass("present");

            
        } else if (currentMoment.isBefore(three)) {
            // give three the future color
            $('#seventh').addClass("future");
            
        } else if (currentMoment.isAfter(three)) {
            // give nine the past color
            $('#seventh').addClass("past");
            
        }

        var four = moment().set({ h: 16, m: 0 }).format(formatString);
        var fourEnd = moment().set({ h: 16, m: 59 }).format(formatString);

        if (currentMoment.isBefore(fourEnd) && currentMoment.isAfter(four)) {
            // add current time class
            $('#eighth').addClass("present");

            
        } else if (currentMoment.isBefore(four)) {
            // give four the future color
            $('#eighth').addClass("future");
            
        } else if (currentMoment.isAfter(four)) {
            // give nine the past color
            $('#eighth').addClass("past");
            
        }

        var five = moment().set({ h: 17, m: 0 }).format(formatString);
        var fiveEnd = moment().set({ h: 17, m: 59 }).format(formatString);

        if (currentMoment.isBefore(fiveEnd) && currentMoment.isAfter(five)) {
            // add current time class
            $('#last').addClass("present");

            
        } else if (currentMoment.isBefore(five)) {
            // give five the future color
            $('#last').addClass("future");
            
        } else if (currentMoment.isAfter(five)) {
            // give nine the past color
            $('#last').addClass("past");
            
        }


    }, 1000);

    function startPage() {
        $("#hour-9 .description").val(localStorage.getItem("9am"));
        $("#hour-10 .description").val(localStorage.getItem("10am"));
        $("#hour-11 .description").val(localStorage.getItem("11am"));
        $("#hour-12 .description").val(localStorage.getItem("12pm"));
        $("#hour-1 .description").val(localStorage.getItem("1pm"));
        $("#hour-2 .description").val(localStorage.getItem("2pm"));
        $("#hour-3 .description").val(localStorage.getItem("3pm"));
        $("#hour-4 .description").val(localStorage.getItem("4pm"));
        $("#hour-5 .description").val(localStorage.getItem("5pm"));
        // if (time && value) {

        // }
        // for (var i = 0; i < localStorage.length; i++) {
        //     firstElt.innerHTML += (time + value);
        // }
    }

    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).siblings(".hour").text();
        localStorage.setItem(time, value);
        if (time && value) {
        }

    });

    startPage();
});


