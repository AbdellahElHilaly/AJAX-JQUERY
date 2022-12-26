<?php

    include_once 'connection.php'; 


    if(isset($_POST['request']) && $_POST['request'] == "get"){
        $sql = "SELECT * FROM person";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            $data;  $i=0;
            while($row = mysqli_fetch_assoc($result)) {
                $data[$i]['id'] = $row['id'];
                $data[$i++]['name'] = $row['name'];
            }
            echo json_encode($data);
        } else {
        echo "0 results";
        }
    }


    if(isset($_POST['request']) && $_POST['request'] == "serch"){
        $key = $_POST['requestKey'];
        $sql = "SELECT * FROM person WHERE name LIKE '$key%'";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            $data;  $i=0;
            while($row = mysqli_fetch_assoc($result)) {
                $data[$i]['id'] = $row['id'];
                $data[$i++]['name'] = $row['name'];
            }
            echo json_encode($data);
        } else {
        echo "0 results";
        }
    }


    





    mysqli_close($conn);




?>