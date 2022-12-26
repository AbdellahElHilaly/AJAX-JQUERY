<?php
    $server = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ajax-live-coding";

    $conn = mysqli_connect($server, $username, $password);

    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    }

    if (mysqli_select_db($conn, $dbname)) {
    // echo "Connected successfully to database '$dbname'";
    } else {
    die("Error selecting database: " . mysqli_error($conn));
    }


?>