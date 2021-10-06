<template>
<section id="login">
   <div class="wrapper_login">
        <div class="wrapper_logo">
            <div class="logo"></div>
        </div>
        <div class="name_logo">
            Bixtrum
        </div>
        <div class="welcome">
            Welcome back
        </div>
        <div class="formulaire_connexion">
            <form action="/" method="POST">
                <div class="Email">
                    <label for="email"><span class="ident_champs"> E-mail <span class="red">*</span></span> </label><br>
                    <input type="text" id="email" class="input_form" placeholder="  Enter your email" autofocus required>
                </div>
                <div class="password">
                    <label for="pasword"> <span class="ident_champs">Password <span class="red">*</span></span></label><br>
                    <input type="password" id="password" class="input_form" placeholder="   Enter your password" autofocus required>
                </div>
            </form>
        </div>
        <div class="before_sign">
            <div class="checkbox">
            <label class="container">
                <input type="checkbox" checked="checked"> keep loged in
            </label>
            </div>
            <div class="forgot_pw">
                <Button1 message = "forgot password?" />
            </div>
        </div>
         <div class="signIn">
                <Button message = "Sign in" />
        </div>
        <div class="msg_other_log">
            <div class="msg_border"></div>
            <div class="msg_txt"> Or log in with </div>
            <div class="msg_border"></div>
        </div>
        <div class="wrapper_soc_net">
            <div class="social_net">
            <div class="facebook hover_soc_net">
                  <Button3 img_src= "./img/facebook-svgrepo-com.svg" />
            </div>
             <div class="Google hover_soc_net">
                  <Button3 img_src= "./img/google-svgrepo-com2.svg" />
            </div>
             <div class="linkedin hover_soc_net">
                  <Button3 img_src="./img/linkedin-svgrepo-com.svg"/>
            </div>
        </div>
        </div>
        <div class="sign_up">
            Don't have and account?  <Button1 message = "Sign up" />
        </div>
    </div>
</section>
</template>
<style src="./login.css">
</style>
<script src="./login.js">
</script>
