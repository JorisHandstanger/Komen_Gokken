

<main class="cd-main-content">

<section class="cd-intro">

<div class="default">

<form class="" action="index.php?page=register" method="post" class="">


    <div class="form-group<?php if(!empty($errors['email'])) echo ' has-error'; ?>">
        <div class="input-container">
            <input type="text" placeholder="Email" name="email" id="registerEmail" class="form-control" value="<?php if(!empty($_POST['email'])) echo $_POST['email'];?>" />
            <?php if(!empty($errors['email'])) echo '<span class="error-message">' . $errors['email'] . '</span>'; ?>
        </div>
    </div>

    <div class="form-group<?php if(!empty($errors['password'])) echo ' has-error'; ?>">
        <div class="input-container">
            <input type="password" placeholder="Wachtwoord" name="password" id="registerPassword" class="form-control" />
            <?php if(!empty($errors['password'])) echo '<span class="error-message">' . $errors['password'] . '</span>'; ?>
        </div>
    </div>

    <div class="form-group<?php if(!empty($errors['confirm_password'])) echo ' has-error'; ?>">
        <div class="input-container">
            <input type="password" placeholder="Herhaal wachtwoord"  name="confirm_password" id="registerConfirmPassword" class="formregister" />
            <?php if(!empty($errors['confirm_password'])) echo '<span class="error-message">' . $errors['confirm_password'] . '</span>'; ?>
        </div>
    </div>

    <div class="form-group<?php if(!empty($errors['spel'])) echo ' has-error'; ?>">
        <div class="input-container">
            <input type="spel" placeholder="Jouw favoriete spel"  name="spel" id="registerConfirmPassword" class="formregister" />
            <?php if(!empty($errors['spel'])) echo '<span class="error-message">' . $errors['spel'] . '</span>'; ?>
        </div>
    </div>

    <div class="form-group<?php if(!empty($errors['adres'])) echo ' has-error'; ?>">
        <div class="input-container">
            <input type="adres" placeholder="adres"  name="adres" id="registerConfirmPassword" class="formregister" />
            <?php if(!empty($errors['adres'])) echo '<span class="error-message">' . $errors['adres'] . '</span>'; ?>
        </div>
    </div>

    <div class="form-group input-container">

      <button value="register" type="submit" class="registerlink">Registreer</button>

    </div>

	</form>

	<a href="index.php?page=login">terug</a>

	</div>


</section>

</main>



