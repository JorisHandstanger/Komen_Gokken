<?php

$userDAO = new UserDAO();


$app->get('/users/?',function() use ($userDAO){
    header("Content-Type: application/json");
    echo json_encode($userDAO->selectNames(), JSON_NUMERIC_CHECK);
    exit();
});
