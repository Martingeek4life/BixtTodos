<template>
  <div class="card-mini">
    <h4 class="card-title">{{ card.title }}</h4>
    <transition>
      <div class="cover-img-card" v-if="card.coverImg != ''">
        <img :src="'./src/assets/images/cards/cover/' + card.coverImg" :alt="card.title">
      </div>
    </transition>
    <!-- button for show modal -->
    <button id="myBtn" v-on:click="showModal = true">détails</button>
    <!--div id="myModal" class="modal" v-bind:class="{showModalClass:showModal}"-->
    <div id="myModal" class="modal showModalClass" v-if="showModal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" v-on:click="showModal = false">&times;</span>
        <div class="details">
          <CardDescription :card="this.card"></CardDescription>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./card-mini.js"></script>
<style src="./card-mini.css" scoped></style>
