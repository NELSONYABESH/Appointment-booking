<?php

include "connect.php";


$name = $_POST['name'];

$date = $_POST['date'];

$time = $_POST['time'];


$sql = "INSERT INTO bookings
(name, booking_date, booking_time)

VALUES

('$name', '$date', '$time')";


if(mysqli_query($conn, $sql)){

    echo "Appointment Booked Successfully";

}
else{

    echo "Error";
}

?>