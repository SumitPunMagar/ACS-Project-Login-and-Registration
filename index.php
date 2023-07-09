

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Login Page with Captcha</title>
  <link rel="stylesheet" type="text/css" href="login.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>

<body>

  <div class="login-page">

    <div class="login_form">
      <h2>LOGIN</h2>

      <form method="POST" action="login_register.php">

        <div class="pw-meter">
          <div class="form-control">
            <label for="username"> <span class="fa-solid fa-envelope"></span> Email</label>
            <input type="email" placeholder="sumit@gmail.com" name="email" />


          </div>

          <div class="form-control">
            <label for="username"> <span class="fa-solid fa-lock"></span> Password</label>
            <input type="password" placeholder="Password" id="login-password" name="password" />
            <div class="login-pw-display-toggle-btn">
              <span class="fa-solid fa-eye"></span>
              <span class="fa-solid fa-eye-slash"></span>
            </div>
          </div>
        </div>


      </form>


      <button type="submit" class="login_btn" name="login">Log in</button>

      <div class="register">
        <p>Don't have an account? <a class="register_link" href="#">Register</a></p>
      </div>

    </div>


    <div class="register_form">
      <h2>REGISTRATION</h2>

      <form id="form" class="form" method="POST" action="login_register.php">


        <div class="name">

          <div class="form-control">

            <label for="username"> <span class="fa-solid fa-user"></span> First Name</label>
            <input type="text" placeholder="Sumit" id="firstname" name="fullname" />
            <i class="fas fa-check-circle"></i>
            <i class="fas fa-exclamation-circle"></i>
            <small>Error message</small>
          </div>

          <div class="form-control">
            <label for="username"> <span class="fa-solid fa-user"></span> Last Name</label>
            <input type="text" placeholder="Magar" id="lastname" name="lastname" />
            <i class="fas fa-check-circle"></i>
            <i class="fas fa-exclamation-circle"></i>
            <small>Error message</small>
          </div>

        </div>


        <div class="form-control">
          <label for="username"> <span class="fa-solid fa-envelope"></span> Email</label>
          <input type="email" placeholder="sumit@gmail.com" id="email" name="email" />
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>

        <div class="form-control">
          <label for="username"> <span class="fa-solid fa-phone"></span> Number</label>
          <input type="number" placeholder="number" id="number" name="number" />
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>

        <div class="pw-meter">

          <div class="form-control">
            <label for="username"> <span class="fa-solid fa-lock"></span> Password</label>
            <input type="password" placeholder="Password" id="password" name="password" />
            <div class="pw-display-toggle-btn">
              <span class="fa-solid fa-eye"></span>
              <span class="fa-solid fa-eye-slash"></span>
            </div>

            <div class="pw-strength">
              <span>Weak</span>
              <span class="password-strength-bar"></span>
            </div>

            <small>Error message</small>
          </div>

          <div class="form-control">
            <label for="username"> <span class="fa-solid fa-lock"></span> Confirm Password</label>
            <input type="password" placeholder="Confirm Password" id="password2" name="confirmpassword" />
            <div class="confirm-pw-display-toggle-btn">
              <span class="fa-solid fa-eye"></span>
              <span class="fa-solid fa-eye-slash"></span>
            </div>
            <small>Error message</small>
          </div>
        </div>


        

        <div id="captcha" class="g-recaptcha" data-sitekey="6LdYAj8lAAAAAE1-kSRf67p9GoP05TEHx8ahfkPy"></div>

        <button name="register">Register</button>
      </form>





      <div class="login">
        <p>Already have an account? <a class="login_link" href="#">Login</a></p>
      </div>

    </div>

  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.2.0/zxcvbn.js"> </script>
  <script src="login.js"></script>
  <script defer src="register.js"></script>

  <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer> </script>

</body>

</html>