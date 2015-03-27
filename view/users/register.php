<nav class="main-nav">
		<ul>

		<li><a href="#0"><span>Home</span></a></li>
		<li><a href="#0"><span>Kalender</span></a></li>
		<li><a href="#0"><span>Klassement</span></a></li>
		<li><a href="#0"><span>Hall of fame</span></a></li>

	</ul>

	<div class="footer">

		<p>© Komen Gokken 2015 - All Rights reserved</p>

	</div>

	<a href="#0" class="cd-close-menu">Close<span></span></a>

</nav>

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

	<header class="cd-header">

		<a class="cd-menu-trigger" href="#main-nav"><span></span></a>

	</header>

</section>

</main>

<script src="js/vendor/jquery.min.js"></script>
<script type="text/javascript">
	$('.cd-menu-trigger').on('click', function(event){
	event.preventDefault();
	$('.cd-main-content').addClass('move-out');
	$('.main-nav').addClass('is-visible');
	$('.cd-shadow-layer').addClass('is-visible');

	$(".cd-main-content").css("overflow-x, hidden;");

	});
	//close menu
	$('.cd-close-menu').on('click', function(event){
	event.preventDefault();
	$('.cd-main-content').removeClass('move-out');
	$('.main-nav').removeClass('is-visible');
	$('.cd-shadow-layer').removeClass('is-visible');
	});
</script>


