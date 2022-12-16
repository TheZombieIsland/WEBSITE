<?php

$host = "";
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