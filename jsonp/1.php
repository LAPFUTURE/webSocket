<?php
    $arr = [
        "postName" => $_POST["name"],
        "postAge" => $_POST["age"],
        "file1" => $_FILES
    ];
    // var_dump($_FILES);
    echo json_encode($arr);
?>