<form action="index.php?page=register" method="post" class="yellow-form">
    <h2>Register</h2>
    <div class="form-group<?php if(!empty($errors['email'])) echo ' has-error'; ?>">
        <div class="input-container">
          	<label class="col-sm-2 control-label" for="registerEmail">Email:</label>
            <input type="text" name="email" id="registerEmail" class="form-control" value="<?php if(!empty($_POST['email'])) echo $_POST['email'];?>" />
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
        <div class="1"><input class="registerlink" type="submit" value="register"></div>
    </div>
</form>
