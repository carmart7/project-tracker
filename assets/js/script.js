function displayTimeDay(){
    $("#currentTimeDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    console.log('test');

}

displayTimeDay();
setInterval(displayTimeDay, 1000);