<?php

require_once WWW_ROOT . 'controller' . DS . 'Controller.php';
require_once WWW_ROOT . 'dao' . DS . 'UserDAO.php';

require_once WWW_ROOT . 'phpass' . DS . 'Phpass.php';

class UsersController extends Controller {

	private $userDAO;

	function __construct() {

		$this->userDAO = new UserDAO();

	}

	public function cmslogin(){

			$errors = array();

			if(!empty($_POST)) {
				if(empty($_POST['emailCMS'])) {
					$errors['emailCMS'] = 'Please enter your email';
				}
				if(empty($_POST['passwordCMS'])) {
					$errors['passwordCMS'] = 'Please enter your password';
				}
				if(empty($errors)) {
					$existing = $this->userDAO->selectByEmailCMS($_POST['emailCMS']);
					if(!empty($existing)) {
						$hasher = new \Phpass\Hash;
						if ($hasher->checkPassword($_POST['passwordCMS'], $existing['passwordCMS'])) {
							$_SESSION['user'] = $existing;
						} else {
							$_SESSION['error'] = 'Unknown email / password';
						}
					} else {
						$_SESSION['error'] = 'Unknown email / password';
					}
				} else {
					$_SESSION['error'] = 'Unknown email / password';
				}

					$this->redirect('index.php?page=cms');
			}

	}

	public function login(){
			$errors = array();
			if(!empty($_POST)) {
				if(empty($_POST['email'])) {
					$errors['email'] = 'Please enter your email';
				}
				if(empty($_POST['password'])) {
					$errors['password'] = 'Please enter your password';
				}
				if(empty($errors)) {
					$existing = $this->userDAO->selectByEmail($_POST['email']);
					if(!empty($existing)) {
						$hasher = new \Phpass\Hash;
						if ($hasher->checkPassword($_POST['password'], $existing['password'])) {
							$_SESSION['user'] = $existing;
						} else {
							$_SESSION['error'] = 'Unknown email / password';
						}
					} else {
						$_SESSION['error'] = 'Unknown email / password';
					}
				} else {
					$_SESSION['error'] = 'Unknown email / password';
				}
							$this->redirect('index.php');
			}
	}

	public function adduser() {

  	$confirm = true;
  	$errors = array();
  	$data = $_POST;
  	$confirm = false;

  	if($data){
	  	$addeduser = $this->userDAO->adduser($data);
			if(!$addeduser){
				$errors = $this->userDAO->getValidationErrors($data);
        header('Content-Type: application/json');
        echo json_encode(array('result' => false, 'errors' => $errors));
        die();
			}else{
        /*
				$confirm = true;
				$this->redirect("index.php?page=posts");
        */
        header('Content-Type: application/json');
        echo json_encode(array('result' => true));
        die();
			}
  	}

  	$this->set("data", $data);
  	$this->set("confirm", $confirm);
		$this->set("errors", $errors);
  }

	public function logout(){
			$_SESSION['info'] = 'Logged out';
			unset($_SESSION['user']);
			$this->redirect('index.php');
	}

	public function register() {
		if(!empty($_POST)){
			$errors = array();
			//email validatie
			if(empty($_POST['email'])){
				$errors['email'] = 'Please enter your email address';
			}else{
				$existing= $this->userDAO->selectByEmail($_POST['email']);
				if(!empty($existing)){
					$errors['email'] = 'Email adress already used';
				}
			}
			//password validatie
			if(empty($_POST['password'])){
				$errors['password'] = 'Please enter your password';
			}
			if($_POST['confirm_password'] != $_POST['password']) {
				$errors['confirm_password'] = 'Passwords mismatch';
			}

			if(empty($_POST['spel'])){
				$errors['spel'] = 'enter your favorite game';
			}

			if(empty($_POST['adres'])){
				$errors['adres'] = 'enter your adres';
			}

			//als er geen fouten zijn -> password hashen en dergerlijke
			if(empty($errors)){
				$hasher = new \Phpass\Hash;
				$passwordHash = $hasher->hashPassword($_POST['password']);
				$data = array();
				$data['email'] = $_POST['email'];
				$data['password'] = $passwordHash;
				$data['spel'] = $_POST['spel'];
				$data['adres'] = $_POST['adres'];
				$insertedUser = $this->userDAO->insert($data);
				if(!empty($insertedUser)){
					$_SESSION['info'] = 'Registration Succes';
					$this->redirect('index.php');
				}else{
					$errors = $this->userDAO->getValidationErrors($data);
				}
			}
			if(!empty($errors)){
				$_SESSION['error'] = 'Registration Failed';
			}
			$this->set('errors', $errors);
		}
	}
}
