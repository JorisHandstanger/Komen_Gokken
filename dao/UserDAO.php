<?php
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DAO.php';
class UserDAO extends DAO {

	public function selectAll() {
		$sql = "SELECT * FROM `users`";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	public function selectNames() {
		$sql = "SELECT id, voornaam, achternaam FROM `users`";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

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
			$sql = "INSERT INTO `users` (`email`, `password`, `spel`, `adres`, `voornaam`, `achternaam`)
						VALUES (:email, :password, :spel, :adres, :voornaam, :achternaam)";
			$stmt = $this->pdo->prepare($sql);
			$stmt->bindValue(':email', $data['email']);
			$stmt->bindValue(':password', $data['password']);
			$stmt->bindValue(':spel', $data['spel']);
			$stmt->bindValue(':adres', $data['adres']);
			$stmt->bindValue(':voornaam', $data['achternaam']);
			$stmt->bindValue(':achternaam', $data['voornaam']);
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
			$errors['email'] = "Gelieve je email in te vullen";
		}
		if(empty($data['password'])) {
			$errors['password'] = "Gelieve je passwoord in te vullen";
		}

		if(empty($data['spel'])){
			$errors['spel'] = "Gelieve je favoriete game in te vullen";
		}

		if(empty($data['adres'])){
			$errors['adres'] = "Gelieve je adres in te vullen";
		}

		if(empty($data['voornaam'])){
			$errors['voornaam'] = "Gelieve je voornaam in te vullen";
		}

		if(empty($data['achtenaam'])){
			$errors['achternaam'] = "Gelieve je achternaam in te vullen";
		}

		return $errors;
	}

		public function selectByIdCMS($idCMS) {

		$sql = "SELECT * FROM `userCMS` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id',$idCMS);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);

	}

	public function selectByEmailCMS($emailCMS) {

		$sql = "SELECT * FROM `userCMS` WHERE `emailCMS` = :emailCMS";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':emailCMS',$emailCMS);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);

	}

}



