<?php

require_once WWW_ROOT . 'controller' . DS . 'Controller.php';

class AppController extends Controller {

	public function index() {
			if(empty($_SESSION['user'])){
					$this->redirect('?page=login');
			}
	}

	public function cms() {

	}

}
