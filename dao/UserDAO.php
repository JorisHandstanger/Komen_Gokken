<?php
require_once WWW_ROOT . 'dao' . DS . 'DAO.php';
class UserDAO extends DAO {


	public function selectById($id) {
		$sql = "SELECT * FROM `users` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id',$id);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);

	}

	public function selectByEmail($email) {
		$sql = "SELECT * FROM `users` WHERE `email` = :email";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':email',$email);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);

	}

	public function insert($data) {
		$errors = $this->getValidationErrors($data);
		if(empty($errors)) {
			$sql = "INSERT INTO `users` (`email`, `password`, `spel`, `adres`)
						VALUES (:email, :password, :spel, :adres)";
			$stmt = $this->pdo->prepare($sql);
			$stmt->bindValue(':email', $data['email']);
			$stmt->bindValue(':password', $data['password']);
			$stmt->bindValue(':spel', $data['spel']);
			$stmt->bindValue(':adres', $data['adres']);
			if($stmt->execute()) {
				$insertedId = $this->pdo->lastInsertId();
				return $this->selectById($insertedId);
			}
		}
		return false;
	}

	public function getValidationErrors($data) {
		$errors = array();
		if(empty($data['email'])) {
			$errors['email'] = "Please fill in email";
		}
		if(empty($data['password'])) {
			$errors['password'] = "Please fill in password";
		}

		if(empty($data['spel'])){
			$errors['spel'] = "Please fill in your favorite game";
		}

		if(empty($data['adres'])){
			$errors['spel'] = "Please fill in your adres";
		}

		return $errors;
	}

}
