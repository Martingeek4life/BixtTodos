<template>
  <div class="card-mini">
    <h5 class="card-title">{{ card.title }}</h5>
    <transition>
      <div class="cover-img-card" v-if="card.coverImg != ''">
        <img :src="'./src/assets/images/cards/cover/' + card.coverImg" :alt="card.title">
      </div>
    </transition>
    <!-- button for show modal -->
    <button id="myBtn" v-on:click="showModal()">voir plus</button>
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" v-on:click="hideModal()">&times;</span>
        <div class="details">
          <CardDescription :card="card"></CardDescription>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./card-mini.js"></script>
<style src="./card-mini.css" scoped></style>
