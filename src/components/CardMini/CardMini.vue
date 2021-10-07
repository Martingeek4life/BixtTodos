<template>
  <div class="card-mini">
    <h5 class="card-title">{{ card.title }}</h5>
    <transition>
      <div class="cover-img-card" v-if="card.coverImg != ''">
        <img :src="'./src/assets/images/cards/cover/' + card.coverImg" :alt="card.title">
      </div>
    </transition>
  </div>
</template>

<script src="./card-mini.js"></script>
<style src="./card-mini.css" scoped></style>
