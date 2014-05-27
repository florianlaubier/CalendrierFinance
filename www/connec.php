<?php

$con = mysqli_connect('localhost','root','','nemtys');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"nemtys");
$sql="SELECT * FROM evenement";
$result = mysqli_query($con,$sql);


while($row = mysqli_fetch_array($result)) {
  echo $row['id_event'];
  echo "/";
 
}

mysqli_close($con);
?>