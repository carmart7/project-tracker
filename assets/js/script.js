function displayTimeDay(){
    $("#currentTimeDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    console.log('test');

}

$( "#projectDueDateInput" ).datepicker();
displayTimeDay();
setInterval(displayTimeDay, 1000);