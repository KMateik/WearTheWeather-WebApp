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
  case < 30:
    // code...
    $sql = "SELECT * FROM recommendations Where recID = " . $temp;
    break;
  case < 30:
    // code...
    $sql = "SELECT * FROM recommendations Where recID = " . $temp;
    break;    
  default:
    // code...
    break;
}


$result = $conn->query($sql);
echo $result;
?>
