<template>
  <div class="details-space">
    <div class="headerModal">
      <h2>{{this.card.title}}</h2>
      <h2>{{this.card.description}}</h2>
    </div>
    <Suggested :card="card"></Suggested>
  </div>
</template>
<script src="./CardDescription.js"></script>
<style src="./CardDescription.css" scoped></style>
