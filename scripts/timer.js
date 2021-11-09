//Timer


// var refresh = setInterval(function () {
//     var start_time = parseInt("{{i.date_for_it}}");
//     var current_time = new Date().getTime();
//     var difference = current_time - start_time;
//     $("input#time_taken").attr("value", difference);
//     var days = Math.floor(difference / (60 * 60 * 24 * 1000));
//     var hours = Math.floor(
//         (difference % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60)
//     );
//     var minutes = Math.floor((difference % (60 * 60 * 1000)) / (1000 * 60));
//     var seconds = Math.floor((difference % (60 * 1000)) / 1000);
//     document.getElementById("timer{{i.order.customer_trip_id}}").innerHTML =
//         days + "d," + hours + "hrs: " + minutes + "m: " + seconds + "s";
// }, 1000);
