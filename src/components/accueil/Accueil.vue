<template>
<section class="accueil">
    <header class="header">
        <div class ="logo_zone">
            <div> Logo Zone </div>
        </div>
        <div class = "sign_log">
            <Button1 message = "Log in" />
            <Button message = "Sign up" />
        </div>
    </header>
    <div class="main">
        <section class = "main_section">
            <aside class = "first_aside" >
                <div class="first_text">This service help team work move forward.</div>
                <div>collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</div>
                <div><Input/><Button2 message= "sign up it's free!"/></div>
            </aside>
            <aside>
                <div class="btn-group">
                    <router-link :to="{name: 'workspaces'}">Workspaces</router-link>
                </div>
            </aside>
        </section>
        <footer>
            © Copyright 2021. All rights reserved. by TAMO ;)
        </footer>
    </div>
</section>
</template>

<script src = "./accueil.js">
</script>

<style src="./accueil.css">
</style>
