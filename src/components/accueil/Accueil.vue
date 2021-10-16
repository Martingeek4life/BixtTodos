<template>
<section class="accueil">
    <head>
        <title>Accueil
        </title>
    </head>
    <header class="header">
        <div class ="logo_zone">
            <div class = "logo"></div>
            <div class = "bixtrum"><span>Bixtrum</span></div>
        </div>
        <div class = "sign_log">
            <DropDownList/>
            <Button1  :message = "$t('logIn.value')" />
            <Button :message = "$t('signUp.value')" />
        </div>
    </header>
    <div class="main">
        <section class = "main_section">
            <form method = "post" class = "first_aside" >
                <div class="first_text">{{ $t('headLine.value') }} </div>
                <div> {{ $t('mainText.value') }} </div>
            </form>
            <div class = "email" ><Input/><Button2 :message= "$t('signFree.value')" /></div>
        </section>
        <footer>
            {{ $t('copyright.value') }}
        </footer>
    </div>
</section>
</template>

<script src = "./accueil.js">
</script>

<style src="./accueil.css">
</style>
