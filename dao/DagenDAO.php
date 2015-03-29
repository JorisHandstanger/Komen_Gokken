<?php

require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DAO.php';

class DagenDAO extends DAO {

  public function selectDag() {
    $sql = "SELECT * FROM dagen INNER JOIN users ON dagen.user_id = users.id WHERE dagen.currentday = true";
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

}
