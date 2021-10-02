<template>
<section class="inscription">
    <div class="main">
        <header>
            The header
        </header>
        <section class = "main_section">
            <div class = "title">
                <span>Sign up for your account</span>
            </div>
            <div>
                <InputI0/>
            </div>
            <div>
                <span class ="policy">By signing up, you confirm that you've read and accepted our <span>Terms of Service</span> and <span>Privacy Policy</span>. </span>
            </div>
            <div><ButtonI0 message = "continue" /></div>
            <div>
                <span class ="policy">OR</span>
            </div>
            <div class = "with">
                <div class = "with_child1" ><ButtonI1 img_src = "/image/microsoft_logo.svg" message = "continue with Google" /></div>
                <div class = "with_child2" ><ButtonI1 img_src = "" message = "continue with Microsoft" /></div>
                <div class = "with_child3" ><ButtonI1 img_src = "" message = "continue with Apple" /></div>
                <div class = "with_child4" ><ButtonI1 img_src = "" message = "continue with Slack" /></div>
            </div>
            <div class="last">
                <a>Already have an account? Log In</a>
            </div>
        </section>
        <footer>
            © Copyright 2021. All rights reserved. by TAMO ;)
        </footer>
    </div>
</section>
</template>
<style src="./inscription.css">
</style>
<script src = "./inscription.js">
</script>
