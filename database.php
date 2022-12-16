<?php

<<<<<<< HEAD
$host = "";
=======
$host = "192.168.241.86";
>>>>>>> 553ab338f42ae5ad5e27b0f651e5aab9d9de6414
$dbname = "bejelentkezes regisztracio";
$username = "TheZombieIsland";
$password = "15954535658575Ya";

$mysqli = new mysqli(hostname: $host,
                     username: $username,
                     password: $password,
                     database: $dbname);
                     
if ($mysqli->connect_errno) {
    die("Connection error: " . $mysqli->connect_error);
}

return $mysqli;