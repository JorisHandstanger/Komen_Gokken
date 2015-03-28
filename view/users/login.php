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

		<img class="logo" src="assets/svg/logo.svg" alt="">

		<div class="alert alert-error" style="display:none;"></div>

		<div class="login">

		    <form role="login" action="index.php?page=login" method="post">
		    	<input type="text" name="email" placeholder="Email" required="required" />
		        <input type="password" name="password" placeholder="Wachtwoord" required="required" />
		        <button value="login" type="submit" class="btn btn-primary btn-block btn-large">Log in</button>
		    </form>

		</div>

		<p>Ben je nog niet geregistreerd ? <a href="index.php?page=register">Registreer</a> nu.</p>

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
	$('.cd-menu-trigger').prop("disabled", true);
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
