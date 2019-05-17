<?php
/* Database Credentials
 * $dbuser: database username
 * $dbpass: database password
 * $dbname: the name of the Database
 */
$dbuser = 'root';
$dbpass = 'inst377inst377';
$dbname = 'recommendations';

$conn = new mysqli("localhost", $dbuser, $dbpass, $dbname);
if ($conn->connect_error) {
  die('Connection Failed: ' . $conn->connect_error);
}
$temp = (int)$_POST['temp'];

switch ($temp) {
  case $temp < 30:
    // code...
    $sql = "SELECT recs FROM recommendations Where recID = 1";
    break;
  case $temp >= 30 && $temp < 60:
    // code...
    $sql = "SELECT recs FROM recommendations Where recID = 2";
    break;
  case $temp >= 60:
    // code...
    $sql = "SELECT recs FROM recommendations Where recID = 3";
    break;
  default:
    // code...
    echo "Switch Statement Failed";
    break;
}

$result = $conn->query($sql);

while ($row = $result->fetch_assoc()) {
    echo $row['recs']."<br>";
}

$conn->close();
?>
