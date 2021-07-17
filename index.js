

function akanNames() {

    let inputMonth = document.getElementById("month").value;
    let inputDay = document.getElementById("day").value;
    let inputYear = document.getElementById("year").value;
    let gender = document.getElementsByName("gender").value;

    if (day <= 0 || day > 31) {
        alert("enter valid date")
    } else if (inputYear.length <= 4) {
        alert("Year input invalid")
    } else if (inputMonth.length = ".") {
        alert("Month input required")
    } else {
        alert("All fields MUST be field!!")
    }


    //  function centuryFromYear(year) {
    //      return Math.ceil(year/100)
    //  }

    // var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // var d = new Date();
    // var monthName=months[d.getMonth()];

    var month = inputMonth
    var day = inputDay
    var year = inputYear
    var gender = ''
    var dob = month + " " + day + ", " + year;
    var then = new Date(dob);
    var theDay = then.getDay();
    var akanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    var weekDay = ['Sunday', 'Monday', 'Tuesdays', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    if (gender === "Male") {
        alert("Your akan name is: " + akanMale[theDay] + " Born on :" + weekDay[theDay]);
    }
    if (gender === 'Female') {
        alert("Your akan name is: " + akanFemale[theDay] + " Born on :" + weekDay[theDay]);
    }

}
