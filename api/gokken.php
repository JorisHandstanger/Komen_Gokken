<?php

$gokkenDAO = new GokkenDAO();


$app->get('/logins/?',function() use ($gokkenDAO){
    header("Content-Type: application/json");
    echo json_encode($gokkenDAO->selectAll(), JSON_NUMERIC_CHECK);
    exit();
});
