<main class="cd-main-content">

<section class="cd-intro">

<div class="default">

<form class="" action="index.php?page=register" method="post" class="">

		<img class="titlebg" src="assets/svg/titleBG.svg" alt="">

    <div class="form-group<?php if(!empty($errors['email'])) echo ' has-error'; ?>">
        <div class="input-container">
          	<label class="col-sm-2 control-label" for="registerEmail">Email:</label>
            <input type="text" placeholer="Email" name="email" id="registerEmail" class="form-control" value="<?php if(!empty($_POST['email'])) echo $_POST['email'];?>" />
            <?php if(!empty($errors['email'])) echo '<span class="error-message">' . $errors['email'] . '</span>'; ?>
        </div>
    </div>
    <div class="form-group<?php if(!empty($errors['password'])) echo ' has-error'; ?>">
        <div class="input-container">
            <label class="col-sm-2 control-label" for="registerPassword">Password:</label>
            <input type="password" name="password" id="registerPassword" class="form-control" />
            <?php if(!empty($errors['password'])) echo '<span class="error-message">' . $errors['password'] . '</span>'; ?>
        </div>
    </div>
    <div class="form-group<?php if(!empty($errors['confirm_password'])) echo ' has-error'; ?>">
        <div class="input-container">
            <label class="col-sm-2 control-label" for="registerConfirmPassword">Confirm Password:</label>
            <input type="password" name="confirm_password" id="registerConfirmPassword" class="formregister" />
            <?php if(!empty($errors['confirm_password'])) echo '<span class="error-message">' . $errors['confirm_password'] . '</span>'; ?>
        </div>
    </div>
    <div class="form-group input-container">


       <button value="register" type="submit" class="registerlink">Log in</button>

    </div>

	</form>

	<a href="index.php?page=login">terug</a>


	</div>


</section>

</main>

