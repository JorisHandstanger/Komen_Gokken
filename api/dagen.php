<?php

$dagenDAO = new DagenDAO();

$app->get('/dag/?',function() use ($dagenDAO){
    header("Content-Type: application/json");
    echo json_encode($dagenDAO->selectDag(), JSON_NUMERIC_CHECK);
    exit();
});
