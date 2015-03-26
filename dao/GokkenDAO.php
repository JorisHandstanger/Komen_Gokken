<?php

require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DAO.php';

class GokkenDAO extends DAO {

  public function selectAll() {

    $sql = "SELECT *
    				FROM `dagen`";
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

}
