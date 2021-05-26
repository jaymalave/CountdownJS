var eventDate = new Date("May 31, 2021 10:00:00").getTime();
     
     var x = setInterval( function() {

     var now = new Date().getTime();

     var distance = eventDate - now;

     var days = Math.floor(distance / (1000*60*60*24));
     var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
     var minutes = Math.floor((distance % (1000*60*60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

     document.getElementById("demo").innerHTML = days + " d " + hours + " h " + minutes + " m " + seconds + " s";
 
     if (distance < 0){
         clearInterval(x);
         document.getElementById("demo").innerHTML = "Your Bike Arrives today";

     }

     }, 1000);