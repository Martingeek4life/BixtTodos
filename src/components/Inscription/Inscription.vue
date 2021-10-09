<template>
<section id="inscription">
   <div class="wrapper_inscription">
        <div class="wrapper_logo">
            <div class="logo"></div>
             <div class="name_logo">
                Bixtrum
             </div>
        </div>
        <div class="welcome_center">
             <div class="welcome">
                Welcome <span class="sign_up">sign_up</span>
             </div>
        </div>
        <div class="formulaire_connexion">
            <form action="/" method="POST">
                <div class="name">
                    <label for="name"><span class="ident_champs"> Name <span class="red">*</span></span> </label><br>
                    <input type="text" id="name" class="input_form" placeholder="  Enter your name" autofocus required>
                </div>
                 <div class="surname">
                    <label for="surname"><span class="ident_champs"> surname <span class="red">*</span></span> </label><br>
                    <input type="text" id="surname" class="input_form" placeholder="  Enter your surname" autofocus required>
                </div>
                <div class="Email">
                    <label for="email"><span class="ident_champs"> E-mail <span class="red">*</span></span> </label><br>
                    <input type="text" id="email" class="input_form" placeholder="  Enter your email" autofocus required>
                </div>
                <div class="password">
                    <label for="pasword"> <span class="ident_champs">Password <span class="red">*</span></span></label><br>
                    <input type="password" id="password" class="input_form" placeholder="   Enter your password" autofocus required>
                </div>
                <div class="confirm_password">
                    <label for="pasword"> <span class="ident_champs">Confirm Password <span class="red">*</span></span></label><br>
                    <input type="password" id="password" class="input_form" placeholder="  confirm your password" autofocus required>
                </div>
            </form>
        </div>
        <div class="before_sign">
             <label class="container">
                <input type="checkbox" checked="checked"> keep loged in
            </label>
        </div>
        <div class="welcome_center">
             <div class="signIn">
                <Button message = "Sign in" />
             </div>
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
    </div>
</section>
</template>
<style src="./inscription.css">
</style>
<script src="./inscription.js">
</script>
