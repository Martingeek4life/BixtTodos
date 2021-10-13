<template>
  <div style = "" class="main">
  <header>
    <div class = "header_left">
        <div><ButtonSquare img_src = "./image/menu-svgrepo-com.svg"/></div>
        <div><ButtonA0 message = "Bixtrum" img_src = "./image/bixtrum_logo.png" style ="font-weight: bold;" /></div>
        <div><ButtonA4 message = "Espace de travail" img_src = "./image/down_arrow_white.svg"/></div>
        <div><ButtonA4 message = "Récent" img_src = "./image/down_arrow_white.svg"/></div>
        <div><ButtonA4 message = "Favoris" img_src = "./image/down_arrow_white.svg"/></div>
        <div><ButtonA4 message = "Créer" style = "background-color:rgba(0, 3, 7,0.3)" /></div>
    </div>
    <div class = "header_right">
        <div class = "search"><InputAA0 img_src = "./image/loupe-svgrepo-com.svg" message = " message"/></div>
        <div><ButtonSquare img_src = "./image/exclamation-svgrepo-com.svg"/></div>
        <div><ButtonSquare img_src = "./image/bell.svg" :style = "{ backgroundColor: '#EB5A46' }" /></div>
        <div><ButtonSquare img_src = "./image/TM.png" style = "background-size:85%" /></div>
    </div>
  </header>
  <section class = "main_section">
    <aside class= "first_aside">
        <div><ButtonA1 message = "Tableaux" img_src = "./image/table-svgrepo-com.svg"/></div>
        <div><ButtonA1 message = "Modèles" img_src = "./image/table-svgrepo.svg"/></div>
        <div><ButtonA1 message = "Accueil" img_src = "./image/setting.svg"/></div>
        <div class = "espace"><span>ESPACE DE TRAVAIL</span><div><ButtonSquare img_src = "./image/bell.svg"/></div></div>
        <div><ButtonA1 message = "Espace de travail de l'utilisateur x" img_src = "./image/setting.svg"/></div>
        <div><ButtonA2 message = "Commencer" img_src = "./image/checked-box-svgrepo-com.svg"/></div>
        <div><ButtonA2 message = "Tableau" img_src = "./image/table-svgrepo.svg"/></div>
        <div><ButtonA2 message = "A la une" img_src = "./image/heart-svgrepo-com.svg"/></div>
        <div><ButtonA2 message = "Tableur de l'espace de travail" img_src = "./image/table-svgrepo-com.svg"/></div>
        <div><ButtonA2 message = "Membres" img_src = "./image/member-svgrepo-com.svg"/></div>
        <div><ButtonA2 message = "Paramètres" img_src = "./image/setting.svg"/></div>
    </aside>
    <aside class = "second_aside">
      <div class = "modele"><img src = "./image/table-svgrepo.svg"/><span>Modèle les plus populaires</span></div>
      <div class = "gagne">
        <span>Gagné du temps avec un modèle de la comunauté Bixtrum</span>
        <div><DropDownList/></div>
      </div>
      <div class = "tableau">
        <div><RectangleA1 img_src = "./image/bubble-animated-background.svg" message0 ="Modèle" message = "conduite de projet"/></div>
        <div><RectangleA1 img_src = "./image/bubble-animated-background.svg" message0 ="Modèle" message = "conduite de projet"/></div>
        <div><RectangleA1 img_src = "./image/bubble-animated-background.svg" message0 ="Modèle" message = "conduite de projet"/></div>
      </div>
      <div class = "decouvre">
        <span>Découvrez la galerie de tous les modèles</span>
      </div>
      <div class = "recemment">
        <img src = "./image/clock-svgrepo-com.svg" /><span>Récemment consultés</span>
      </div>
      <div>
          <div><RectangleA0 img_src = "./image/bubble-animated-background.svg" message = "Bixterprise_tech"/></div>
      </div>
      <div class = "vos">
      <span>VOS ESPACES DE TRAVAIL</span>
      </div>
      <div>
        <div><ButtonSquare img_src = "./image/bell.svg"/></div>
        <div>ES..</div>
        <div><ButtonA0 message = "Tableaux" img_src = "./image/table-svgrepo.svg"/></div>
        <div><ButtonA0 message = "Tableur d'espace de travail" img_src = "./image/table-svgrepo-com.svg"/></div>
        <div><ButtonA0 message = "Membres" img_src = "./image/family-svgrepo-com.svg"/></div>
        <div><ButtonA0 message = "Paramètres" img_src = "./image/setting.svg"/></div>
        <div><ButtonA0 message = "Acheter" img_src = "./image/bag-svgrepo-com.svg"/></div>
      </div>
      <div class="tableau">
          <div><RectangleA0 img_src = "./image/bubble-animated-background.svg" message = "Sans titre"/></div>
          <div><RectangleA2 img_src = "./image/background_new.png" message = "créer nouveau tableau" /></div>
      </div>
    </aside>
  </section>
  </div>
</template>

<script src = "./atterissage.js">
</script>
<style src = "./atterissage.css">
</style>
<style src = "./responsive.css">
</style>
